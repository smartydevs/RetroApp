import gql from 'graphql-tag'

export const GET_USER_NOTIFICATIONS = gql`
  query getUserNotifications {
    getUserNotifications {
      _id
      data {
        message
      }
      eventId
      event {
        _id
        photo {
          path
          fullPath
        }
      }
    }
  }
`
