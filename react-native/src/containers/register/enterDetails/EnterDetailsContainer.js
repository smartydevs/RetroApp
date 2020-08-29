import React, { Component } from 'react'

import { EnterDetailsComponent } from '.'
import { ScreenEnum } from '../../../lib/enums'
import { addMemberDetails } from '../../../api'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import { BackHandler } from 'react-native'

class EnterDetailsContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => this.props.navigation.goBack()

  onChangeFirstName = firstName => {
    this.setState({ firstName })
  }

  onChangeLastName = lastName => {
    this.setState({ lastName })
  }

  onRegisterDetails = () => {
    const { navigation } = this.props
    const { email } = navigation.state.params
    const lastName = this.state.lastName.trim()
    const firstName = this.state.firstName.trim()

    const emptyLastName = !lastName.length
    const emptyFirstName = !firstName.length
    if (emptyFirstName || emptyLastName) {
      return Notification.error('Please fill in all fields')
    }

    addMemberDetails({ email, details: { lastName, firstName } }).then(({ isOk }) => {
      if (isOk) {
        return navigation.push(ScreenEnum.CHOOSE_FEED, { email })
      } else {
        return Notification.error(strings.error)
      }
    })
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
