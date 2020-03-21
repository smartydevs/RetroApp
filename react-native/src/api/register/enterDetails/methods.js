import { ADD_MEMBER_DETAILS } from './mutations'
import ApiClient from '../../client'

const { currentInstance } = ApiClient

export const addMemberDetails = async ({ email, details }) => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: ADD_MEMBER_DETAILS,
      variables: {
        email,
        details,
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
