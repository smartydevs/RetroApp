import gql from 'graphql-tag'

export const GET_USER_NOTIFICATIONS = gql`
  query getUserNotifications {
    getUserNotifications {
      _id
      isViewed
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
