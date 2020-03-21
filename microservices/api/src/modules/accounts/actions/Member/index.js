import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { MemberService } from '../../services';
import { SecurityService } from '../../../core/services';
import RolesEnum from '../../db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      registerMember(_, { input }) {
        return MemberService.registerMember(input);
      },

      addMemberDetails(_, { email, details }) {
        return MemberService.addMemberDetails({ email, details });
      },

      addMemberCategories(_, { categories }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.MEMBER);

        return MemberService.addMemberCategories(userId, categories);
      },

      loginMember(_, { loginInput }) {
        return MemberService.loginMember(loginInput);
      },
    },
  },
});
