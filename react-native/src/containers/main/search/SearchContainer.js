import React, { Component } from 'react'
import { SearchComponent } from '.'
import { searchEvents } from '../../../api'
import { Notification, Loading } from '../../../components'
import strings from '../../../lib/stringEnums'
import { ScreenEnum } from '../../../lib/enums'

class SearchContainer extends Component {
  state = {
    loading: true,
    events: [],
  }

  showEvent = _id => {
    this.props.navigation.navigate(ScreenEnum.EVENT, {
      eventId: _id
    })
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
    const { events, loading } = this.state

    if (loading) {
      return <Loading show={loading} />
    }

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
