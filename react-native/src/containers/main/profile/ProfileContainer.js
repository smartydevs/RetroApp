import React, { Component } from 'react'
import { ProfileComponent } from '.'
import { events as Events } from '../../../fixtures/EventsData'

class ProfileContainer extends Component {

    showEvent = (_id) => {
        console.log(_id)
    }

    loadMore = (listType) => {
        console.log(listType)
    }

    render() {
        console.log(this.props.navigation)
        const events = Events
        const totalGoingEvents = events.length
        const totalCreatedEvents = events.length

        return (
            <ProfileComponent
                coverUrl={'https://picsum.photos/300/300'}
                firstName="vlad"
                lastName="romila"
                goingEvents={events}
                totalGoingEvents={totalGoingEvents}
                createdEvents={events}
                totalCreatedEvents={totalCreatedEvents}
                showEvent={this.showEvent}
                loadMore={this.loadMore}
                navigate={this.props.navigation.navigate}
            />
        )
    }
}

export default ProfileContainer
