import gql from 'graphql-tag'

export const SET_USER_PASSWORD = gql`
  mutation setUserPassword($email: String!, $newPassword: String!) {
    setUserPassword(email: $email, newPassword: $newPassword)
  }
`
