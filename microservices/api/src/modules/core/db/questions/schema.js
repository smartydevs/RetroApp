import SimpleSchema from 'simpl-schema';

import Questions from './collection';

const AnswerSchema = new SimpleSchema({
  text: String,
  createdAt: {
    type: Date,
    optional: true,
  },
});

const QuestionsSchema = new SimpleSchema({
  authorId: String,
  text: String,
  answer: {
    type: AnswerSchema,
    optional: true,
  },
  eventId: String,
  createdAt: {
    type: Date,
    optional: true,
  },
});

Questions.attachSchema(QuestionsSchema);
