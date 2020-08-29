import gql from 'graphql-tag'

export const GET_QUESTIONS = gql`
  query getQuestions($eventId: String!) {
    getQuestions(eventId: $eventId) {
      _id
      text
      author {
        _id
        profile {
          firstName
          lastName
          avatarId
          avatar {
            _id
            path
            fullPath
          }
        }
      }
    }
  }
`
