import ApiClient from '../../client'
import { ADD_PUSH_TOKEN } from './mutations'
import { GET_USER_EVENTS } from './queries'

const { currentInstance } = ApiClient

const addPushToken = async pushToken => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: ADD_PUSH_TOKEN,
      variables: {
        token: pushToken,
      },
    })

    return {
      data,
      isOk: true,
    }
  } catch (error) {
    return {
      isOk: false,
      data: error,
    }
  }
}

const getUserEvents = async offset => {
  try {
    const { data } = await currentInstance().query({
      query: GET_USER_EVENTS,
      variables: { offset },
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

export { addPushToken, getUserEvents }
