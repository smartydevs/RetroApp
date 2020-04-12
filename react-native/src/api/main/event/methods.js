import { Platform } from 'react-native-web'

import { CREATE_EVENT } from './mutations'
import ApiClient from '../../client'
import { ApiUrls } from '../../../lib/enums'
import config from '../../../config'

const { environment } = config
const { currentInstance } = ApiClient

export const createEvent = async eventDetails => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: CREATE_EVENT,
      variables: { eventDetails },
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

export const saveEventPhoto = async (photo, eventId) => {
  const apiUrl = ApiUrls[environment]
  const formData = createEventPhotoData(photo, eventId)
  try {
    const data = await fetch(`${apiUrl}/event/image`, {
      method: 'POST',
      body: formData,
    }).then(res => res.json())

    return {
      isOk: true,
      data,
    }
  } catch (error) {
    return { isOk: false, data: error }
  }
}

const createEventPhotoData = (photo, eventId) => {
  const data = new FormData()

  data.append('photo', {
    name: 'Image',
    type: photo.type,
    uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  })

  data.append('eventId', eventId)

  return data
}
