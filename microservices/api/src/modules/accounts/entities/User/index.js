import { load } from 'graphql-load';

import resolvers from './resolvers';
import typeDefs from './types.gql';

load({
  typeDefs,
  resolvers,
});
