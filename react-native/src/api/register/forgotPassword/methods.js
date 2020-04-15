import ApiClient from '../../client'
import { SET_USER_PASSWORD } from './mutations'

const { currentInstance } = ApiClient

export const forgotPassword = async (email, newPassword) => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: SET_USER_PASSWORD,
      variables: {
        newPassword,
        email,
      },
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
