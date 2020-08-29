import gql from 'graphql-tag'

export const ADD_QUESTION = gql`
  mutation addQuestion($input: QuestionInput!) {
    addQuestion(input: $input) {
      _id
    }
  }
`
