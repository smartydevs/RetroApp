import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { NotificationService, SecurityService } from '../../services';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserNotifications(_, args, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return NotificationService.getUserNotifications(userId);
      },
    },
  },
});
