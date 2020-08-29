import gql from 'graphql-tag'

export const ADD_REVIEW = gql`
  mutation addReview ($input: ReviewInput!) {
    addReview (input: $input) {
      _id
    }
  }
`
