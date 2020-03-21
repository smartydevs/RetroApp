import React, { Component } from 'react'
import { LoginComponent } from '.'
import Constants, { ScreenEnum, NotificationTypeEnum } from '../../../lib/enums'
import { login } from '../../../api'
import { AsyncStorage } from 'react-native'
import ApiClient from '../../../api/client'
import { Notification } from '../../../components'

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
    
    login(state)
      .then(async ({ data: { loginMember }, isOk }) => {
        if (isOk) {
          await this.storeToken(loginMember.token)
          await this.storeUserId(loginMember.userId)
          this.props.navigation.push(ScreenEnum.MAIN)
        } else {
          // Notification.show(, NotificationTypeEnum.ERROR)
        }
      })
  }

  storeToken = async token => {
    try {
      await AsyncStorage.setItem(Constants.TOKEN, token)
      ApiClient.setToken(token)
    } catch (err) {
      this.setState({ isLoading: false })
      console.log('err', err)
    }
  }

  storeUserId = async userId => {
    try {
      await AsyncStorage.setItem(Constants.USER_ID, userId)
    } catch (err) {
      console.log('err', err)
    }
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
