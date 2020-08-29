import gql from 'graphql-tag'

export const CREATE_APP_REVIEW = gql`
  mutation createAppReview($input:AppReviewInput!){
  createAppReview(input:$input){
    _id
  }
}
`
