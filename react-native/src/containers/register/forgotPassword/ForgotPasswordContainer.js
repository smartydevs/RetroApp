import React, { Component } from 'react'

import { forgotPassword } from '../../../api/register/forgotPassword'
import { ForgotPasswordComponent } from '.'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'

class ForgotPasswordContainer extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    editable: false
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

    const { isOk, data } = await forgotPassword(email, password)
    if (!isOk) {
      return Notification.error('Something went wrong')
    }

    this.props.navigation.goBack()
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ editable: true })
    }, 100)
  }
  render() {
    const { email, password, repeatPassword } = this.state

    return (
      <ForgotPasswordComponent
        editable
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
