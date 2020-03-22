import React, { Component } from 'react'
import { Camera } from 'expo-camera';

import { ProfileComponent } from '.'
import { events as Events } from '../../../fixtures/EventsData'
import { Notification } from '../../../components';
import strings from '../../../lib/stringEnums';
import Constants, { NotificationLength } from '../../../lib/enums';
import { AsyncStorage } from 'react-native';
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';

class ProfileContainer extends Component {
    state = {
        hasCameraPermission: null,
        hasCameraRollPermission: null
    }

    componentDidMount() {
        this.cameraSetUp()
    }

    cameraSetUp = async () => {
        let initialStatus = await Permissions.getAsync(Permissions.CAMERA);
        if (initialStatus.status !== "granted") {
            let askAgainStatus = await Permissions.askAsync(Permissions.CAMERA);
            if (askAgainStatus.status !== "granted") {
                this.setState({ hasCameraPermission: false })
            }
            else
                this.setState({ hasCameraPermission: true })
        }
        else
            this.setState({ hasCameraPermission: true })

        initialStatus = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (initialStatus.status !== "granted") {
            let askAgainStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (askAgainStatus.status !== "granted") {
                this.setState({ hasCameraRollPermission: false })
            }
            else
                this.setState({ hasCameraRollPermission: true })
        }
        else
            this.setState({ hasCameraRollPermission: true })

    }

    takeProfilePicture = async () => {
        if (this.state.hasCameraPermission === false || this.state.hasCameraRollPermission === false) {
            this.cameraSetUp()
        }
        else {
            let result = await ImagePicker.launchCameraAsync();
        }
    }

    showEvent = (_id) => {
        console.log(_id)
    }

    loadMore = (listType) => {
        console.log(listType)
    }

    render() {
        const events = Events
        const totalGoingEvents = events.length
        const totalCreatedEvents = events.length

        return (
            <ProfileComponent
                coverUrl={'https://picsum.photos/300/300'}
                firstName="vlad"
                lastName="romila"
                goingEvents={events}
                totalGoingEvents={totalGoingEvents}
                createdEvents={[]}
                totalCreatedEvents={0}
                showEvent={this.showEvent}
                loadMore={this.loadMore}
                navigate={this.props.navigation.navigate}
                takeProfilePicture={this.takeProfilePicture}
            />
        )
    }
}

export default ProfileContainer
