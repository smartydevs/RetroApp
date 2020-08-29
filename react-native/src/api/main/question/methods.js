import ApiClient from '../../client'
import { ADD_QUESTION } from './mutations'
import { GET_QUESTIONS } from './queries'

const { currentInstance } = ApiClient

export const createQuestion = async questionInput => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: ADD_QUESTION,
      variables: {
        input: questionInput,
      },
    })
    return {
      isOk: true,
      data,
    }
  } catch (err) {
    return {
      isOk: false,
      data: err,
    }
  }
}

export const getQuestions = async eventId => {
  try {
    const { data } = await currentInstance().query({
      query: GET_QUESTIONS,
      variables: { eventId },
    })

    return {
      isOk: true,
      data,
    }
  } catch (err) {
    console.log('err', err)
    return {
      isOk: false,
      data: err,
    }
  }
}
