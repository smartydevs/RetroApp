import ApiClient from '../../client'

import { ADD_REVIEW } from './mutations'

const { currentInstance } = ApiClient

export const addReview = async input => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: ADD_REVIEW,
      variables: { input },
    })

    return {
      isOk: true,
      data,
    }
  } catch (error) {
    return {
      isOk: false,
      data: error,
    }
  }
}