import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { HomeComponent } from '.'
import * as Permissions from 'expo-permissions';
import { Notifications } from "expo";

class HomeContainer extends Component {
    saveToken = async () => {
        let token = await Notifications.getExpoPushTokenAsync();
        AsyncStorage.setItem("pushToken", token)
    }
    checkPushToken() {
        AsyncStorage.getItem("pushToken")
            .then(async (pushToken) => {
                if (!pushToken) {
                    let initialRes = await Permissions.askAsync(Permissions.NOTIFICATIONS)
                    if (initialRes.status === "granted") {
                        this.saveToken();
                    }
                    else {
                        if (initialRes.canAskAgain === true) {
                            alert("da")
                            let askAgainRes = await Permissions.askAsync(Permissions.NOTIFICATIONS)
                            if (askAgainRes.status === "granted") {
                                this.saveToken();
                            }
                        }
                    }
                }
            })
    }
    componentDidMount() {
        this.checkPushToken();
    }
    render() {
        return (
            <HomeComponent />
        )
    }
}

export default HomeContainer
