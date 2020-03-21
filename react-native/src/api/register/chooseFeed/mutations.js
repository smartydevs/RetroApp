import gql from 'graphql-tag'

const ADD_MEMBER_CATEGORIES = gql`
  mutation addMemberCategories($email: String!, $categories: [String]!) {
    addMemberCategories(email: $email, categories: $categories)
  }
`

export { ADD_MEMBER_CATEGORIES }
