import gql from 'graphql-tag'

const REGISTER_MEMBER = gql`
  mutation registerMember($input: ProfileInput!) {
    registerMember(input: $input) {
      token
      userId
    }
  }
`

export { REGISTER_MEMBER }
