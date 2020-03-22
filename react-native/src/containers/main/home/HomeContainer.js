import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { HomeComponent } from '.'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import { addPushToken } from '../../../api'

class HomeContainer extends Component {
  saveToken = async () => {
    try {
      let token = await Notifications.getExpoPushTokenAsync()
      console.log('save token token', token)
      addPushToken(token).then(({ data, isOk }) => {
        if (isOk) {
          AsyncStorage.setItem('pushToken', token)
        }
      })
    } catch (err) {
      console.log('error', err)
    }
  }

  checkPushToken() {
    AsyncStorage.getItem('pushToken').then(async pushToken => {
      if (!pushToken) {
        let initialRes = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        console.log('initial res', initialRes)
        if (initialRes.status === 'granted') {
          console.log('granted')
          this.saveToken()
        } else {
          if (initialRes.canAskAgain === true) {
            let askAgainRes = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (askAgainRes.status === 'granted') {
              this.saveToken()
            }
          }
        }
      }
    })
  }
  componentDidMount() {
    this.checkPushToken()
  }
  render() {
    return <HomeComponent />
  }
}

export default HomeContainer
