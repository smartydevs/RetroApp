import React, { Component } from 'react'
import { ForgotPasswordComponent } from '.'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'

class ForgotPasswordContainer extends Component {
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

  onPressChangePassword = async () => {
    const { password, repeatPassword, email } = this.state

    if (password.trim().length < 6 || repeatPassword.trim().length < 6) {
      return Notification.error(strings.providePassword)
    }

    if (password !== repeatPassword) {
      return Notification.error(strings.passwordsDontMatch)
    }

    this.props.navigation.goBack()
  }

  render() {
    const { email, password, repeatPassword } = this.state

    return (
      <ForgotPasswordComponent
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onChangeRepeatPassword={this.onChangeRepeatPassword}
        email={email}
        password={password}
        repeatPassword={repeatPassword}
        onPressChangePassword={this.onPressChangePassword}
      />
    )
  }
}

export default ForgotPasswordContainer
