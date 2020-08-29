import gql from 'graphql-tag'

export const ADD_REVIEW = gql`
  mutation addReview ($input: ReviewInput!) {
    addReview (input: $input) {
      _id
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation deleteReview ($reviewId: String!) {
    deleteReview (reviewId: $reviewId)
  }
`