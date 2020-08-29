import gql from 'graphql-tag'

export const CONTACT = gql`
  mutation createAppReview($input:AppReviewInput!){
  createAppReview(input:$input){
    _id
  }
}
`
