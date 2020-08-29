import ApiClient from '../../client'

import { ADD_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from './mutations'
import { GET_REVIEWS } from './queries'

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

export const getReviews = async eventId => {
  try {
    const { data } = await currentInstance().query({
      query: GET_REVIEWS,
      variables: { eventId },
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
