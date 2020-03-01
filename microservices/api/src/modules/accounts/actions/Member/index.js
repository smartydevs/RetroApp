import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { MemberService } from '../../services';

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
    },
  },
});
