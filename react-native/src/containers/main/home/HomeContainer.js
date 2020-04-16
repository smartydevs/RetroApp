import React, { Component } from 'react'
import { AsyncStorage, Text } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'

import { HomeComponent } from '.'
import { addPushToken, getUserEvents } from '../../../api'
import { Notification, Loading } from '../../../components'
import { NotificationTypeEnum, ScreenEnum } from '../../../lib/enums'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: 5,
      events: [],
      hasMore: true,
      loading: true,
      eventsNumber: 0
    }
  }

  componentDidMount() {
    this.checkPushToken()
    this.getEvents()
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

    const { events, hasMore, eventsNumber } = data.getUserEvents

    this.setState({
      events,
      hasMore,
      eventsNumber,
      loading: false,
    })

  }

  loadMore = async () => {
    await this.setState(prevState => ({
      offset: prevState.offset + 5,
    }))

    this.getEvents()
  }

  showEvent = _id => {
    this.props.navigation.navigate(ScreenEnum.EVENT, {
      eventId: _id
    })
  }

  refreshPage = () => {
    this.setState({ offset: 5, loading: true }, this.getEvents)
  }

  render() {
    const { events, hasMore, loading, eventsNumber } = this.state
    if (loading) {
      return (
        <Loading show={loading} />
      )
    }
    return (
        <HomeComponent
            events={events}
            eventsNumber={eventsNumber}
            hasMore={hasMore}
            showEvent={this.showEvent}
            loadMore={this.loadMore}
            refreshPage={this.refreshPage}
        />
    )
  }
}

export default HomeContainer
