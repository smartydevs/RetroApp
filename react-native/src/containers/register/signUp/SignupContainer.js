import React, { Component } from 'react'
import { SignupComponent } from '.'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import Constants, { NotificationTypeEnum, ScreenEnum } from '../../../lib/enums'
import { registerMember } from '../../../api'
import { AsyncStorage } from 'react-native'
import ApiClient from '../../../api/client'

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

  onPressSignUp = async () => {
    const { password, repeatPassword, email } = this.state

    if (password.trim().length < 6 || repeatPassword.trim().length < 6) {
      return Notification.show(strings.providePassword, ERROR)
    }

    if (password !== repeatPassword) {
      return Notification.show(strings.passwordsDontMatch, ERROR)
    }

    const { isOk, data } = await registerMember({ password, email })

    if (!isOk) {
      return Notification.show(strings.error, ERROR)
    }

    const {
      registerMember: { token, userId },
    } = data

    await this.storeToken(token)
    await this.storeUserId(userId)

    return this.props.navigation.push(ScreenEnum.ENTER_DETAILS, { email })
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
