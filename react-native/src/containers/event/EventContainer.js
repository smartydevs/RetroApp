import React, { Component } from 'react'
import { EventComponent } from '.'

import { events } from '../../fixtures/EventsData'

class EventContainer extends Component {
  state = {
    eventData: {}
  }

  componentDidMount () {
    const { eventId } = this.props.navigation.state.params
    const eventData = events.find(({_id}) => _id === eventId)
    this.setState({ eventData })
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  onGoToUserPage = (_id) => {
    console.log(_id)
  }

  render() {
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
