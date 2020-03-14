import React, { Component } from 'react'

import { EnterDetailsComponent } from '.'
import { ScreenEnum } from '../../../lib/enums'

class EnterDetailsContainer extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  onChangeFirstName = (firstName) => {
    this.setState({ firstName })
  }

  onChangeLastName = (lastName) => {
    this.setState({ lastName })
  }

  onRegisterDetails = () => {
    this.props.navigation.push(ScreenEnum.CHOOSE_FEED)
  }

  render() {
    const { firstName, lastName } = this.state
    return (
      <EnterDetailsComponent
        firstName={firstName}
        lastName={lastName}
        onChangeFirstName={this.onChangeFirstName}
        onChangeLastName={this.onChangeLastName}
        onRegisterDetails={this.onRegisterDetails}
      />
    )
  }
}

export default EnterDetailsContainer
