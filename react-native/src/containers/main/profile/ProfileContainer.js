import React, { Component } from 'react'
import { Camera } from 'expo-camera'

import { ProfileComponent } from '.'
import { events as Events } from '../../../fixtures/EventsData'
import { Notification } from '../../../components';
import strings from '../../../lib/stringEnums';
import Constants, { NotificationLength } from '../../../lib/enums';
import { AsyncStorage } from 'react-native';

class ProfileContainer extends Component {
    state = {
        hasPermission: null
    }

    componentDidMount () {
        this.cameraSetUp()
        // this.requestPermission()
    }

    cameraSetUp = async () => {
        const statusPermission = await AsyncStorage.getItem(Constants.CAMERA_PERMISSIONS)
        console.log('statusPermission', statusPermission)

        if (statusPermission === null) {
            const status = this.requestPermission()
            console.log('status', status)
            this.setState({ hasPermission: status === 'granted' }, () => {
                console.log(this.state.hasPermission)
                this.setCameraToken(status)
            })
        } else if (statusPermission !== 'granted') {
            const status = this.requestPermission()

            if (status !== 'granted') {
                return this.setState({ hasPermission: false })                
            }

            this.setCameraToken(status)
            this.setState({ hasPermission: true })
        } else {
            this.setState({ hasPermission: true})
        }
    }

    requestPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync()
        console.log('status func', status)
        return status
    }

    setCameraToken = async (status) => {
        try {
            await AsyncStorage.removeItem(Constants.CAMERA_PERMISSIONS)
            await AsyncStorage.setItem(Constants.CAMERA_PERMISSIONS, status)
        } catch (e) {
            console.log(e)
        }
    }

    takeProfilePicture = () => {
        if (this.state.hasPermission === false) {
            this.requestPermission()
        }

        console.log('doing photo ...')
    }

    showEvent = (_id) => {
        console.log(_id)
    }

    loadMore = (listType) => {
        console.log(listType)
    }

    render() {
        const events = []
        const totalGoingEvents = events.length
        const totalCreatedEvents = events.length

        return (
            <ProfileComponent
                coverUrl={'https://picsum.photos/300/300'}
                firstName="vlad"
                lastName="romila"
                goingEvents={events}
                totalGoingEvents={totalGoingEvents}
                createdEvents={events}
                totalCreatedEvents={totalCreatedEvents}
                showEvent={this.showEvent}
                loadMore={this.loadMore}
                navigate={this.props.navigation.navigate}
                takeProfilePicture={this.takeProfilePicture}
            />
        )
    }
}

export default ProfileContainer
