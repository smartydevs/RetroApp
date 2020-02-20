import { load } from 'graphql-load';

import typeDefs from './types.gql';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      registerUser(_, { input }, { userId }) {

      },
    },
  },
});
