import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { EventService, SecurityService } from '../../services';
import RolesEnum from '../../../accounts/db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      createEvent(_, { eventDetails }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.ORGANISER);

        return EventService.createEvent(userId, eventDetails);
      },
    },
  },
});
