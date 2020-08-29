import { Platform } from 'react-native-web'

import { CREATE_APP_REVIEW } from './mutations'
import ApiClient from '../client'
import { SERVER_URL } from '../../lib/enums'
import config from '../../config'

const { environment } = config
const { currentInstance } = ApiClient

export const createAppReview = async contactState => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: CREATE_APP_REVIEW,
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