import { load } from 'graphql-load';

import './Member';
import './Organiser';
import typeDefs from './types.gql';
import { SecurityService } from '../../core/services';
import { UserService } from '../services';

load({
  typeDefs,
  resolvers: {
    Query: {
      getUserInfo(_, v, { userId }) {
        SecurityService.checkLoggedIn({ userId });

        return UserService.getUserInfo(userId);
      },
    },
  },
});
