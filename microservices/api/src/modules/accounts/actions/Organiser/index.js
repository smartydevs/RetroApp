import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { SecurityService } from '../../../core/services';
import RolesEnum from '../../db/users/enums/RolesEnum';
import { OrganiserService } from '../../services';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      becomeOrganiser(_, {}, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.MEMBER);

        return OrganiserService.becomeOrganiser(userId);
      },
    },
  },
});
