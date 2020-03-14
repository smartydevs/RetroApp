import { REGISTER_MEMBER } from '../mutations'
import ApiClient from '../../../client'

const { currentInstance } = ApiClient

const registerMember = async input => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: REGISTER_MEMBER,
      variables: {
        input,
      },
    })

    return {
      data,
      isOk: true,
    }
  } catch (error) {
    return {
      data: error,
      isOk: false,
    }
  }
}

export { registerMember }
