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
    Mutation: {
      readAllUserNotifications(_, args, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return NotificationService.readAllUserNotifications(userId);
      },
      readUserNotification(_, { notificationId }, { userId }) {
        if (!SecurityService.notificationBelongsToUser(userId, notificationId)) {
          throw new Error('foreign-notification');
        }

        return NotificationService.readUserNotification(userId, notificationId);
      },
    },
  },
});
