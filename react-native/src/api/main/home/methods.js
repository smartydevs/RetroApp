import ApiClient from '../../client'
import { ADD_PUSH_TOKEN } from './mutations'

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

export { addPushToken }
