import ApiClient from '../client'
import { GET_EVENT } from './queries'

const { currentInstance } = ApiClient

export const getEvent = async eventId => {
  try {
    const { data } = await currentInstance().query({
      query: GET_EVENT,
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
