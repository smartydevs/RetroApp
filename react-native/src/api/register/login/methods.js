import { LOGIN_MEMBER } from './mutations'
import ApiClient from '../../client'

const { currentInstance } = ApiClient

const login = async input => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: LOGIN_MEMBER,
      variables: {
        loginInput: input,
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

export { login }
