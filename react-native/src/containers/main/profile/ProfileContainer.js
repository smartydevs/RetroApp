import React, { Component } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native-web'
import { AsyncStorage } from 'react-native'
import { Camera } from 'expo-camera'

import { ProfileComponent } from '.'
import { saveMemberAvatar } from '../../../api'
import { NotificationTypeEnum } from '../../../lib/enums'
import { events as Events } from '../../../fixtures/EventsData'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import Constants, { NotificationLength } from '../../../lib/enums'

class ProfileContainer extends Component {
  state = {
    hasPermission: null,
  }

  componentDidMount() {
    this.cameraSetUp()
  }

  cameraSetUp = async () => {
    let initialStatus = await Permissions.getAsync(Permissions.CAMERA)
    if (initialStatus.status !== 'granted') {
      let askAgainStatus = await Permissions.askAsync(Permissions.CAMERA)
      if (askAgainStatus.status !== 'granted') {
        this.setState({ hasCameraPermission: false })
      } else this.setState({ hasCameraPermission: true })
    } else this.setState({ hasCameraPermission: true })

    initialStatus = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (initialStatus.status !== 'granted') {
      let askAgainStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (askAgainStatus.status !== 'granted') {
        this.setState({ hasCameraRollPermission: false })
      } else this.setState({ hasCameraRollPermission: true })
    } else this.setState({ hasCameraRollPermission: true })
  }

  takeProfilePicture = async () => {
    if (
      this.state.hasCameraPermission === false ||
      this.state.hasCameraRollPermission === false
    ) {
    } else {
      let result = await ImagePicker.launchCameraAsync()
      const userId = await AsyncStorage.getItem('userId')
      const photoData = this.createFormData(result, userId)
      this.saveAvatar(photoData)
    }
  }

  saveAvatar(photoData) {
    fetch('http://16a0e090.ngrok.io/uploadAvatar', {
      method: 'POST',
      body: photoData,
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          avatarUrl: response.path,
        })
      })
      .catch(error => {
        console.log('upload error', error)
      })
  }

  createFormData = (photo, userId) => {
    const data = new FormData()
    data.append('photo', {
      name: 'Image',
      type: photo.type,
      uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
    })

    data.append('userId', userId)

    return data
  }

  showEvent = _id => {
    console.log(_id)
  }

  loadMore = listType => {
    console.log(listType)
  }

  render() {
    const events = []
    const totalGoingEvents = events.length
    const totalCreatedEvents = events.length

    return (
      <ProfileComponent
        coverUrl={'https://picsum.photos/300/300'}
        avatarUrl={this.state.avatarUrl}
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
