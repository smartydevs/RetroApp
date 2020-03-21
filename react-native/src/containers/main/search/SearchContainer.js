import React, { Component } from 'react'
import { SearchComponent } from '.'

class SearchContainer extends Component {

    showEvent = id => {
        // navigate to a new page where it is displayed a description of the event etc
    }

    render() {
        return (
            <SearchComponent
                onChangeText={() => { }}
                showEvent={this.showEvent}
            />
        )
    }
}

export default SearchContainer
