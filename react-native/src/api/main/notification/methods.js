import ApiClient from '../../client'
import { READ_ALL_USER_NOTIFICATIONS, READ_USER_NOTIFICATION } from './mutations'

const { currentInstance } = ApiClient

export const readAllUserNotifications = async () => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: READ_ALL_USER_NOTIFICATIONS,
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

export const readUserNotification = async notificationId => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: READ_USER_NOTIFICATION,
      variables: { notificationId },
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
