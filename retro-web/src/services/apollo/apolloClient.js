import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { concat } from 'apollo-link';

import meteorAccountsLink from './meteorAccountsLink';
import config from '../../config';

export function initialize() {
  const httpLinkOptions = {
    uri: config.GRAPHQL_ENDPOINT,
  };

  const httpLink = createHttpLink(httpLinkOptions);
  const finalLink = concat(httpLink, meteorAccountsLink);

  const client = new ApolloClient({
    link: finalLink,
    cache: new InMemoryCache({
      dataIdFromObject: object => object._id || null,
    }),
  });

  return {
    client,
  };
}
