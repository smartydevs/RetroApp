import gql from 'graphql-tag'

export const READ_ALL_USER_NOTIFICATIONS = gql`
  mutation readAllUserNotifications {
    readAllUserNotifications
  }
`

export const READ_USER_NOTIFICATION = gql`
  mutation readUserNotification($notificationId: String!) {
    readUserNotification(notificationId: $notificationId)
  }
`
