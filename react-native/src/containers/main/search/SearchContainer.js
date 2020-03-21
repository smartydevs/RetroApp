import React, { Component } from 'react'
import { SearchComponent } from '.'
import { searchEvents } from '../../../api'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'

class SearchContainer extends Component {
  state = {
    loading: true,
    events: [],
  }

  showEvent = _id => {
    // navigate to a new page where it is displayed a description of the event etc
  }

  componentDidMount() {
    this.searchEvents()
  }

  searchEvents(searchInput = null) {
    searchEvents(searchInput).then(({ data, isOk }) => {
      if (isOk) {
        const { searchEvents } = data
        this.setState({
          loading: false,
          events: searchEvents,
        })
      } else {
        this.setState({
          loading: false,
        })
        return Notification.error(strings.error)
      }
    })
  }

  render() {
    console.log('events', this.state.events)
    return (
      <SearchComponent
        events={this.state.events}
        onChangeText={searchInput => this.searchEvents(searchInput)}
        showEvent={this.showEvent}
      />
    )
  }
}

export default SearchContainer
