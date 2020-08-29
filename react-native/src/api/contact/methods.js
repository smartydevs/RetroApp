import { Platform } from 'react-native-web'

import { CONTACT } from './mutations'
import ApiClient from '../client'
import { SERVER_URL } from '../../lib/enums'
import config from '../../config'

const { environment } = config
const { currentInstance } = ApiClient

export const sendContactMessage = async contactState => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: CONTACT,
      variables: { input: contactState },
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