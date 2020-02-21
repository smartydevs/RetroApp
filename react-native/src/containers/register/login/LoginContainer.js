import React, { Component } from 'react'
import { LoginComponent } from '.'
import { ScreenEnum } from '../../../lib/enums'

const {MAIN} = ScreenEnum

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onChangeEmail = (email) => {
    this.setState({email})
  }

  onChangePassword = (password) => {
    this.setState({password})
  }

  onPressForgotPassword = () => {}

  onPressFacebook = () => {}

  onPressLogin = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  onPressRegister = () => {}

  render() {
    const {email, password} = this.state

    return (
      <LoginComponent
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onPressFacebook={this.onPressFacebook}
        onPressLogin={this.onPressLogin}
        onPressForgotPassword={this.onPressForgotPassword}
        onPressRegister={this.onPressRegister}
        email={email}
        password={password}
      />
    )
  }
}

export default LoginContainer
