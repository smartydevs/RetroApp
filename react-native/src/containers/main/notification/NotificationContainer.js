import React, { Component } from 'react'
import { NotificationComponent } from '.'

class NotificationContainer extends Component {

    showNotification = (_id) => {
        console.log(_id)
    }

    render() {
        return (
            <NotificationComponent
                showNotification={this.showNotification}
            />
        )
    }
}

export default NotificationContainer
