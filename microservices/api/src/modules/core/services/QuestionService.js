export default class QuestionService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getQuestions(eventId) {
    const { db } = this;

    const questions = db.questions
      .createQuery({
        $filters: {
          eventId,
        },
        _id: 1,
        text: 1,
        createdAt: 1,
        answer: {
          createdAt: 1,
          text: 1,
        },
        author: {
          _id: 1,
          profile: {
            firstName: 1,
            lastName: 1,
            avatarId: 1,
            avatar: {
              _id: 1,
              path: 1,
              fullPath: 1,
            },
          },
        },
      })
      .fetch();
    return questions;
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
