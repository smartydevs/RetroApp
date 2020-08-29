import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { EventService, SecurityService } from '../../services';
import RolesEnum from '../../../accounts/db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserEvents(_, { offset }, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        return EventService.getUserEvents(userId, offset);
      },
      searchEvents(_, { searchInput }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return EventService.searchEvents({ userId, searchInput });
      },
      getEvent(_, { eventId }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return EventService.getEvent(eventId, userId);
      },
    },
    Mutation: {
      createEvent(_, { eventDetails }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.MEMBER);
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
