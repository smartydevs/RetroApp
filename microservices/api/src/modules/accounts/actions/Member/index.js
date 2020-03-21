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

      addMemberCategories(_, { email, categories }) {
        return MemberService.addMemberCategories(email, categories);
      },

      loginMember(_, { loginInput }) {
        return MemberService.loginMember(loginInput);
      },

      addPushToken(_, { token }, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return MemberService.addPushToken(userId, token);
      },
    },
  },
});
