import React, { Component } from 'react'
import { LoginComponent } from '.'
import { ScreenEnum } from '../../../lib/enums'
import { login } from '../../../api/register/login/methods'

const { MAIN } = ScreenEnum

class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = email => {
    this.setState({ email })
  }

  onChangePassword = password => {
    this.setState({ password })
  }

  onPressForgotPassword = () => {}

  onPressFacebook = () => {}

  onPressLogin = () => {
    const { state } = this
    login(state).then(res => {
      console.log('res', res)
      this.props.navigation.push(ScreenEnum.MAIN)
    })
  }

  onPressSignUp = () => {
    this.props.navigation.push(ScreenEnum.SIGN_UP)
  }

  render() {
    const { email, password } = this.state

    return (
      <LoginComponent
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onPressFacebook={this.onPressFacebook}
        onPressLogin={this.onPressLogin}
        onPressForgotPassword={this.onPressForgotPassword}
        onPressSignUp={this.onPressSignUp}
        email={email}
        password={password}
      />
    )
  }
}

export default LoginContainer
