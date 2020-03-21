import gql from 'graphql-tag'

const LOGIN_MEMBER = gql`
  mutation loginMember($loginInput: LoginInput!) {
    loginMember(loginInput: $loginInput) {
      token
      userId
    }
  }
`

export { LOGIN_MEMBER }
