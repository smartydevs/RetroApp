import gql from 'graphql-tag'

export const GET_USER_INFO = gql`
  query getUserInfo($userId: String) {
    getUserInfo(userId: $userId) {
      _id
      email
      profile {
        firstName
        lastName
        fullName
        avatar {
          path
          fullPath
        }
      }
      ownedEvents {
        _id
        title
        startDate
        photo {
          path
          fullPath
        }
      }
      participatingEvents {
        _id
        title
        startDate
        photo {
          path
          fullPath
        }
      }
    }
  }
`
