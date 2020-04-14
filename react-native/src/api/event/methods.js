import ApiClient from '../client'
import { GET_EVENT } from './queries'
import { JOIN_EVENT, LEAVE_EVENT } from './mutations'

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

export const joinEvent = async eventId => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: JOIN_EVENT,
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


export const leaveEvent = async eventId => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: LEAVE_EVENT,
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
