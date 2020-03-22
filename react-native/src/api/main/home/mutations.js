import gql from 'graphql-tag'

const ADD_PUSH_TOKEN = gql`
  mutation addPushToken($token: String!) {
    addPushToken(token: $token)
  }
`

export { ADD_PUSH_TOKEN }
