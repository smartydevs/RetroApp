import React, { Component } from 'react'
import { Text } from 'react-native'

import {
  getUserNotifications,
  readUserNotification,
  readAllUserNotifications,
} from '../../../api/main/notification'
import { NotificationComponent } from '.'
import { Notification } from '../../../components'
import { ScreenEnum } from '../../../lib/enums'

class NotificationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notifications: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.getNotifications()
  }

  readAllNotifications = async () => {
    const { isOk, data } = await readAllUserNotifications()

    if (!isOk) {
      return Notification.error('Something went wrong')
    }
  }

  showNotification = async (notificationId, eventId) => {
    const { isOk, data } = await readUserNotification(notificationId)

    if (!isOk) {
      return Notification.error('Something went wrong')
    }

    this.props.navigation.navigate(ScreenEnum.EVENT, {
      eventId,
    })
  }

  getNotifications = async () => {
    const { data, isOk } = await getUserNotifications()
    console.log('data', data)
    if (!isOk) {
      this.setState({
        loading: false,
      })
      return Notification.error('Something went wrong')
    }
    const userNotifications = data.getUserNotifications || []

    const notifications = userNotifications.map(notification => ({
      _id: notification._id,
      message: notification.data.message,
      imageSource: notification.event.photo ? notification.event.photo.fullPath : '',
      eventId: notification.event._id,
      isViewed: notification.isViewed,
    }))

    this.setState({
      loading: false,
      notifications,
    })
  }

  render() {
    const { notifications, loading } = this.state
    console.log('notifications', notifications)
    if (loading) {
      return <Text>Loading ...</Text>
    }

    return (
      <NotificationComponent
        notifications={notifications}
        showNotification={this.showNotification}
      />
    )
  }
}

export default NotificationContainer
