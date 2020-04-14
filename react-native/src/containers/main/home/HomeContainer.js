import React, { Component } from 'react'
import { AsyncStorage, Text } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'

import { HomeComponent } from '.'
import { addPushToken, getUserEvents } from '../../../api'
import { Notification } from '../../../components'
import { NotificationTypeEnum } from '../../../lib/enums'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: 5,
      events: [],
      hasMore: true,
      loading: true,
    }
  }

  saveToken = async () => {
    try {
      let token = await Notifications.getExpoPushTokenAsync()
      addPushToken(token).then(({ data, isOk }) => {
        if (isOk) {
          AsyncStorage.setItem('pushToken', token)
        }
      })
    } catch (err) {
      console.log('error', err)
    }
  }

  checkPushToken() {
    AsyncStorage.getItem('pushToken').then(async pushToken => {
      if (!pushToken) {
        let initialRes = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        if (initialRes.status === 'granted') {
          this.saveToken()
        } else {
          if (initialRes.canAskAgain === true) {
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(async askAgainRes => {
              if (askAgainRes.status === 'granted') {
                this.saveToken()
              }
            })
          }
        }
      }
    })
  }

  getEvents = async () => {
    const { offset } = this.state

    const { isOk, data } = await getUserEvents(offset)

    if (!isOk) {
      this.setState({
        loading: false,
      })
      return Notification.show(
        'Something went wrong with fetching the events',
        NotificationTypeEnum.ERROR
      )
    }

    const { events, hasMore } = data.getUserEvents

    this.setState({
      events,
      hasMore,
      loading: false,
    })

  }

  onGetMoreClick = async () => {
    await this.setState(prevState => ({
      offset: prevState.offset + 5,
    }))

    this.getEvents()
  }

  componentDidMount() {
    this.checkPushToken()
    this.getEvents()
  }
  render() {
    const { events, hasMore, loading } = this.state
    console.log('this state', this.state)
    if (loading) {
      return <Text>Loading</Text>
    }
    return <HomeComponent events={events} hasMore={hasMore} />
  }
}

export default HomeContainer
