import { load } from 'graphql-load';

import typeDefs from './types.gql';
import resolvers from './resolvers';

load({
  typeDefs,
  resolvers,
});
