import gql from 'graphql-tag'

const ADD_MEMBER_DETAILS = gql`
  mutation addMemberDetails($email: String!, $details: DetailsInput!) {
    addMemberDetails(email: $email, details: $details)
  }
`

export { ADD_MEMBER_DETAILS }