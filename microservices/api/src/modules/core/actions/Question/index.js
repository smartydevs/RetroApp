import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { QuestionService, SecurityService } from '../../services';
import Questions from '../../db/questions';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      addQuestion(_, { input }, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        SecurityService.checkUserIsInEvent(userId, input.eventId);

        return QuestionService.addQuestion(input, userId);
      },
      addAnswer(_, { questionId, text }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        const question = Questions.findOne(questionId, { fields: { eventId: 1 } });
        if (!question) {
          throw new Error('questionId-wrong');
        }
        SecurityService.checkUserIsEventOrganiser(userId, question.eventId);

        return QuestionService.addAnswer(questionId, text);
      },
    },
  },
});
