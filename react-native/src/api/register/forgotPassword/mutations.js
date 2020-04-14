import gql from 'graphql-tag'

export const SET_USER_PASSWORD = gql`
  mutation setUserPassword($newPassword: String!) {
    setUserPassword(newPassword: $newPassword)
  }
`
