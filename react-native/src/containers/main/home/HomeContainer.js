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
                if (initialRes.status === 'granted') {
                    this.saveToken()
                } else {
                    if (initialRes.canAskAgain === true) {
                        Permissions.askAsync(Permissions.NOTIFICATIONS)
                            .then(async askAgainRes => {
                                if (askAgainRes.status === 'granted') {
                                    this.saveToken()
                                }
                            })

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
