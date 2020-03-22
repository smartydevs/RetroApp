import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { EventService, SecurityService } from '../../services';
import RolesEnum from '../../../accounts/db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserEvents(_, args, { userId }) {
        SecurityService.checkLoggedIn({ userId });
        return EventService.getUserEvents(userId);
      },
      searchEvents(_, { searchInput }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return EventService.searchEvents({ userId, searchInput });
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
