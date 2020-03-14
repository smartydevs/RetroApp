import { loginWithPassword } from 'meteor-apollo-accounts'

import ApiClient from '../../../client'

const { currentInstance } = ApiClient

const login = async input => {
  try {
    return await loginWithPassword(input, currentInstance())
  } catch (error) {
    return {
      data: error,
      isOk: false,
    }
  }
}

export { login }
