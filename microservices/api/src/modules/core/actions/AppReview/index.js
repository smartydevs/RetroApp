import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { AppReviewService, SecurityService } from '../../services';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      createAppReview(_, { input }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return AppReviewService.createAppReview(input, userId);
      },
    },
  },
});
