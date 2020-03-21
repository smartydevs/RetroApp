import gql from 'graphql-tag'

const SEARCH_EVENTS = gql`
  query searchEvents($searchInput: String) {
    searchEvents(searchInput: $searchInput) {
      _id
      title
      location {
        addressName
      }
      startDate
      photo {
        fullPath
      }
      users {
        profile {
          fullName
          avatar {
            fullPath
          }
        }
      }
    }
  }
`

export { SEARCH_EVENTS }
