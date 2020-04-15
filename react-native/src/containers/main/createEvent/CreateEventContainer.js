import React, { Component } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import { CreateEventComponent } from '.'
import { createEvent, saveEventPhoto } from '../../../api/main/event'
import { Notification } from '../../../components'
import { NotificationTypeEnum, BottomStackScreensEnum } from '../../../lib/enums'
import { AsyncStorage } from 'react-native'
import { getCategories } from '../../../api'
import strings from '../../../lib/stringEnums'

class CreateEventContainer extends Component {
  state = {
    photoExisting: false,
    photo: null,
    hasPermission: null,
    numberOfCards: 0,
    cardsChosen: [],
    categoriesCards: []
  }

  componentDidMount() {
    this.cameraSetUp()
    this.getCategories()
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

  onCreateEvent = async (eventDetails, callback) => {
    eventDetails.categoriesId = this.state.cardsChosen
  
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

    this.setState({
      photoExisting: false,
      photo: null,
      cardsChosen: [],
    })
    callback()
    this.props.navigation.navigate(BottomStackScreensEnum.MAIN)
  }

  onCardPress = (_id) => {
    const { cardsChosen, numberOfCards } = this.state
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    let newCardsChosen = []
    let newNumberOfCards = numberOfCards

    if (existingCard) {
      newCardsChosen = cardsChosen.filter(cardId => cardId !== _id)
      newNumberOfCards--
    } else {
      newCardsChosen = [...cardsChosen, _id]
      newNumberOfCards++
    }

    this.setState({
      numberOfCards: newNumberOfCards,
      cardsChosen: newCardsChosen,
    })
  }

  async getCategories() {
    getCategories().then(({ data, isOk }) => {
      if (isOk) {
        const { getCategories = [] } = data
        const categories = getCategories.map(cat => {
          return {
            _id: cat._id,
            name: cat.name,
            imageSource: cat.photo.fullPath,
          }
        })
        this.setState({
          isLoading: false,
          categoriesCards: categories,
        }, () => console.log(this.state.categoriesCards))
      } else {
        this.setState({ isLoading: false })
        return Notification.error(strings.error)
      }
    })
  }

  render() {
    const { photoExisting, photo, categoriesCards, cardsChosen } = this.state

    return (
      <CreateEventComponent
        onCreateEvent={this.onCreateEvent}
        onAddPhoto={this.onAddPhoto}
        photoExisting={photoExisting}
        photo={photo}
        cards={categoriesCards}
        onCardPress={this.onCardPress}
        cardsChosen={cardsChosen}
      />
    )
  }
}

export default CreateEventContainer
