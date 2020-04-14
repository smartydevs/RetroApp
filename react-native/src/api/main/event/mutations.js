import gql from 'graphql-tag'

export const CREATE_EVENT = gql`
  mutation createEvent($eventDetails: EventInput!) {
    createEvent(eventDetails: $eventDetails)
  }
`
