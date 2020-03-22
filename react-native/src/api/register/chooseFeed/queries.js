import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      _id
      name
    }
  }
`

export { GET_CATEGORIES }
