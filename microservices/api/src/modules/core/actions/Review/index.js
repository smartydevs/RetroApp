import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { ReviewService, SecurityService } from '../../services';

load({
  typeDefs,
  resolvers: {
    Query: {
      getReviews(_, { eventId }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return ReviewService.getReviews(eventId);
      },
    },
    Mutation: {
      addReview(_, { input }, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        SecurityService.checkUserIsInEvent(userId, input.eventId);

        return ReviewService.addReview(input, userId);
      },
      editReview(_, { reviewId, input }, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        SecurityService.reviewBelongsToUser(userId, reviewId);

        return ReviewService.editReview(reviewId, input);
      },
      deleteReview(_, { reviewId }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return ReviewService.deleteReview(reviewId);
      },
    },
  },
});
