import React, { Component } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import { CreateEventComponent } from '.'
import { createEvent, saveEventPhoto } from '../../../api/main/event'
import { Notification } from '../../../components'
import { NotificationTypeEnum } from '../../../lib/enums'
import { AsyncStorage } from 'react-native'

class CreateEventContainer extends Component {
  state = {
    photoExisting: false,
    photo: null,
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

  onAddPhoto = async () => {
    const havePermissionForPhoto =
      this.state.hasCameraPermission && this.state.hasCameraRollPermission
    if (havePermissionForPhoto) {
      let result = await ImagePicker.launchCameraAsync()
      await this.setState({
        photo: result,
        photoExisting: true,
      })
    }
  }

  onCreateEvent = async eventDetails => {
    const { isOk, data } = await createEvent(eventDetails)

    if (!isOk) {
      console.log('[Create Event] error', data)
      return Notification.show('Something went wrong', NotificationTypeEnum.ERROR)
    }

    const { createEvent: eventId } = data
    const { photo } = this.state

    if (!photo) {
      Notification.show('Every event should have a photo', NotificationTypeEnum.ERROR)
    }

    const { isOk: isOkPhoto, data: photoData } = await saveEventPhoto(photo, eventId)

    if (!isOkPhoto) {
      console.log('[Upload Event Image] error', photoData)
      return Notification.show(
        'Something went wrong when uploading the image',
        NotificationTypeEnum.ERROR
      )
    }
  }

  render() {
    const { photoExisting, photo } = this.state

    return (
      <CreateEventComponent
        onCreateEvent={this.onCreateEvent}
        onAddPhoto={this.onAddPhoto}
        photoExisting={photoExisting}
        photo={photo}
      />
    )
  }
}

export default CreateEventContainer
