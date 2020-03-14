import React, { Component } from 'react'
import { SignupComponent } from '.'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import { NotificationTypeEnum } from '../../../lib/enums'
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

    // if (password.trim().length < 6 || repeatPassword.trim().length < 6) {
    //   Notification.show(strings.providePassword, ERROR)
    //   return
    // }

    // if (password !== repeatPassword) {
    //   Notification.show(strings.passwordsDontMatch, ERROR)
    //   return
    // }

    registerMember({ password, email }).then(({ isOk, data }) => {
      console.log('is ok', isOk)
      console.log('data', data)
      this.props.navigation.goBack()
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
