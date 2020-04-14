import gql from 'graphql-tag'

export const JOIN_EVENT = gql`
  mutation joinEvent ($eventId: String!) {
    joinEvent(eventId: $eventId)
  }
`

export const LEAVE_EVENT = gql`
  mutation leaveEvent ($eventId: String!) {
    leaveEvent(eventId: $eventId)
  }
`