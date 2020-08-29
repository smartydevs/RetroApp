import gql from 'graphql-tag'

export const GET_REVIEWS = gql`
  query getReviews($eventId: String!) {
    getReviews(eventId: $eventId) {
      _id
      title
      description
      stars        
      author {
        _id
        reviewsNumber
        profile {
          firstName
          lastName
          avatarId
          avatar {
            path
            fullPath
          }
        }
      }
    }
  }
`