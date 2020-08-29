import gql from 'graphql-tag'

export const GET_EVENT = gql`
  query getEvent($eventId: String!) {
    getEvent(eventId: $eventId) {
      _id
      title
      description
      startDate
      endDate
      averageStars
      isCurrentUserParticipating
      categories {
        _id
        name
        photoId
        photo {
          path
          fullPath
        }
      }
      reviews {
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
      photoId
      photo {
        path
        fullPath
      }
      location {
        addressName
      }
      organiser {
        _id
        profile {
          firstName
          lastName
          avatar {
            path
            fullPath
          }
        }
      }
      users {
        _id
        profile {
          firstName
          lastName
          avatar {
            path
            fullPath
          }
        }
      }
    }
  }
`
