import gql from 'graphql-tag'

export const GET_USER_EVENTS = gql`
  query getUserEvents($offset: Int) {
    getUserEvents(offset: $offset) {
      events {
        _id
        title
        description
        startDate
        photo {
          path
          fullPath
        }
        location {
          addressName
        }
      }
      hasMore
    }
  }
`
