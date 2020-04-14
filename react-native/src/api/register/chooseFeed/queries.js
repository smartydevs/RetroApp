import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      _id
      name
      photo {
        path
        fullPath
      }
    }
  }
`

export { GET_CATEGORIES }
