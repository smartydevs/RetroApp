import React, { Component } from 'react'
import { SignupComponent } from '.'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import { NotificationTypeEnum, ScreenEnum } from '../../../lib/enums'
import { registerMember } from '../../../api'

const { ERROR } = NotificationTypeEnum

class SignupContainer extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
  }

  onChangeEmail = email => {
    this.setState({ email })
  }

  onChangePassword = password => {
    this.setState({ password })
  }

  onChangeRepeatPassword = repeatPassword => {
    this.setState({ repeatPassword })
  }

  onPressSignUp = () => {
    const { password, repeatPassword, email } = this.state

    if (password.trim().length < 6 || repeatPassword.trim().length < 6) {
      return Notification.show(strings.providePassword, ERROR)
    }

    if (password !== repeatPassword) {
      return Notification.show(strings.passwordsDontMatch, ERROR)
    }

    registerMember({ password, email }).then(({ isOk, data }) => {
      if (isOk) {
        return this.props.navigation.push(ScreenEnum.ENTER_DETAILS, { email })
      }
      console.log('sign up error', data)
      Notification.show(strings.error, ERROR)
    })
  }

  onPressFacebook = () => {}

  render() {
    const { email, password, repeatPassword } = this.state

    return (
      <SignupComponent
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onChangeRepeatPassword={this.onChangeRepeatPassword}
        email={email}
        password={password}
        repeatPassword={repeatPassword}
        onPressFacebook={this.onPressFacebook}
        onPressSignUp={this.onPressSignUp}
      />
    )
  }
}

export default SignupContainer
