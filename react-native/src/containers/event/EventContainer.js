import React, { Component } from 'react'
import { Text, AsyncStorage } from 'react-native'
import { EventComponent } from '.'

import { getEvent, joinEvent, leaveEvent } from '../../api/event'
import { events } from '../../fixtures/EventsData'
import { Notification, Loading } from '../../components'
import Constants, { NotificationTypeEnum } from '../../lib/enums'

class EventContainer extends Component {
  state = {
    eventData: {},
    loading: true,
    userJoined: false,
    userId: null
  }

  componentDidMount() {
    const { eventId } = this.props.navigation.state.params
    this.getUserId()

    getEvent(eventId).then(({ data, isOk }) => {
      if (isOk) {
        console.log('data', data)
        this.setState({ eventData: data.getEvent }, this.setUserJoined)
      } else {
        this.setState({ loading: false })
        return Notification.show('Something went wrong', NotificationTypeEnum.ERROR)
      }
    })
  }

  getUserId = () => {
    AsyncStorage.getItem(Constants.USER_ID).then(userId => {
      console.log('USER ID', userId)
      this.setState({ userId })
    })
  }

  setUserJoined = () => {
    const { eventData: { users }, userId } = this.state

    console.log(users)
    if (!users || users.length === 0) {
      return this.setState({ userJoined: false, loading: false })
    }

    const userJoined = users.find(user => user._id === userId)
  
    if (userJoined) {
      this.setState({ userJoined: true, loading: false})
    } else {
      this.setState({ userJoined: false, loading: false})
    }

  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  onGoToUserPage = _id => {
    console.log(_id)
  }

  onPressToggleJoinButton = () => {
    const { userJoined, eventData: { _id : eventId} } = this.state

    if (!userJoined) {
      return this.joinEvent(eventId)
    }
    return this.leaveEvent(eventId)
  }

  joinEvent = async (eventId) => {
    console.log('join event')
    console.log('ids', eventId, this.props.navigation.state.params.eventId)
    const { data, isOk } = await joinEvent(eventId)
    console.log(isOk, data)
  }

  leaveEvent = async (eventId) => {
    console.log('leave event')
    const { data, isOk } = await leaveEvent(eventId)
    console.log(isOk, data)
  }

  render() {
    const { loading, userJoined, eventData } = this.state
    if (loading) {
      return <Loading show={loading} />
    }
    return (
      <EventComponent
        onGoBack={this.onGoBack}
        eventData={eventData}
        userJoined={userJoined}
        onGoToUserPage={this.onGoToUserPage}
        onPressToggleJoinButton={this.onPressToggleJoinButton}
      />
    )
  }
}

export default EventContainer
