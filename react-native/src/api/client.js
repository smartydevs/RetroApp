import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloLink } from 'apollo-link'
import Constants, { ApiUrls } from '../lib/enums'
import Config from '../config'

const meteorAccountsLink = new ApolloLink((operation, forward) => forward(operation))

export { meteorAccountsLink }

const API_BASE_URL = ApiUrls[Config.environment]

let currentClientInstance
let currentClientToken

export default class ApiClient {
  static setToken(token) {
    ApiClient.init(token)
    currentClientToken = token
  }

  static getToken() {
    return currentClientToken
  }

  static createServerLink(token) {
    const authMiddleware = setContext(() => ({
      headers: {
        [Constants.METEOR_LOGIN_TOKEN]: token,
      },
    }))

    const httpLink = createHttpLink({
      uri: `${API_BASE_URL}/graphql`,
    })

    const httpLinkWithMiddleware = authMiddleware.concat(httpLink)

    let terminatingLink = meteorAccountsLink.concat(httpLinkWithMiddleware)

    terminatingLink = ApolloLink.split(({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return (
        kind === 'OperationDefinition' &&
        (operation === 'subscription' ||
          operation === 'query' ||
          operation === 'mutation')
      )
    }, terminatingLink)

    return ApolloLink.from([terminatingLink])
  }

  static init(token) {
    if (token && token === currentClientToken && currentClientInstance) {
      return currentClientInstance
    }

    const apolloLink = ApiClient.createServerLink(token)

    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    }

    currentClientInstance = new ApolloClient({
      link: apolloLink,
      cache: new InMemoryCache({
        dataIdFromObject: obj => obj.id,
        fragmentMatcher: {
          match: ({ id }, typeCond, context) => !!context.store.get(id),
        },
      }),
      defaultOptions,
    })

    currentClientToken = token

    return currentClientInstance
  }

  static currentInstance() {
    return currentClientInstance
  }
}
