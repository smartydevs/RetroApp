import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { EventService, SecurityService } from '../../services';
import RolesEnum from '../../../accounts/db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserEvents(_, v, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        return EventService.getUserEvents(userId);
      },
    },
    Mutation: {
      createEvent(_, { eventDetails }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.ORGANISER);

        return EventService.createEvent(userId, eventDetails);
      },
      joinEvent(_, { eventId }, { userId }) {
        return EventService.joinEvent(userId, eventId);
      },
      leaveEvent(_, { eventId }, { userId }) {
        return EventService.leaveEvent(userId, eventId);
      },
    },
  },
});
