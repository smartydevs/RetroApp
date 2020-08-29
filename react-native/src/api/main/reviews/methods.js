import ApiClient from '../../client'

import { ADD_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from './mutations'

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

export const deleteReview = async reviewId => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: DELETE_REVIEW,
      variables: { reviewId },
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
