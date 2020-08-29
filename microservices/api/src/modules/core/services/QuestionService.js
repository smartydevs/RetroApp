export default class QuestionService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  addQuestion(input, userId) {
    const { db } = this;

    input.authorId = userId;
    const questionId = db.questions.insert(input);
    return db.questions.findOne(questionId);
  }

  addAnswer(questionId, text) {
    const { db } = this;

    const answer = {
      text,
      createdAt: Date.now(),
    };

    db.questions.update(questionId, {
      $set: {
        answer,
      },
    });

    return answer;
  }
}
