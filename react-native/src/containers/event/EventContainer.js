import React, { Component } from 'react'
import { Text } from 'react-native'
import { EventComponent } from '.'

import { getEvent } from '../../api/event'
import { events } from '../../fixtures/EventsData'
import { Notification } from '../../components'
import { NotificationTypeEnum } from '../../lib/enums'

class EventContainer extends Component {
  state = {
    eventData: {},
    loading: true,
  }

  componentDidMount() {
    const { eventId } = this.props.navigation.state.params
    getEvent(eventId).then(({ data, isOk }) => {
      if (isOk) {
        console.log('data', data)
        this.setState({ eventData: data.getEvent, loading: false })
      } else {
        this.setState({ loading: false })
        return Notification.show('Something went wrong', NotificationTypeEnum.ERROR)
      }
    })
    // const eventData = events.find(({ _id }) => _id === eventId)
    // this.setState({ eventData })
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  onGoToUserPage = _id => {
    console.log(_id)
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <Text>Loading...</Text>
    }
    return (
      <EventComponent
        onGoBack={this.onGoBack}
        eventData={this.state.eventData}
        onGoToUserPage={this.onGoToUserPage}
      />
    )
  }
}

export default EventContainer
