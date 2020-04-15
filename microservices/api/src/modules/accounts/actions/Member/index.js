import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { MemberService, UserService } from '../../services';
import { SecurityService } from '../../../core/services';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserInfo(_, args, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        //If we get an argument called userId then we return info about that user
        if (args.userId) {
          return UserService.getUserInfo(args.userId);
        }
        //if we don't get the argument we return info about the logged in user
        return UserService.getUserInfo(userId);
      },
    },
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

      addPushToken(_, { token }, { user }) {
        SecurityService.checkLoggedIn({ userId: user._id });

        return MemberService.addPushToken(user, token);
      },
      updateUserInfo(_, { userInfo }, { user }) {
        SecurityService.checkLoggedIn({ userId: user._id });

        return MemberService.updateUserInfo(user, userInfo);
      },
      setUserPassword(_, { newPassword, email }) {
        return MemberService.setUserPassword(email, newPassword);
      },
    },
  },
});
