import React, { Component } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native-web'
import { AsyncStorage, Alert } from 'react-native'

import { ProfileComponent } from '.'
import { OS, ScreenEnum } from '../../../lib/enums'
import { Notification, Loading } from '../../../components'
import { getUserInfo } from '../../../api'

class ProfileContainer extends Component {
  state = {
    hasPermission: null,
    editable: true,
    userId: null,
    user: {},
    loading: true,
    avatarUrl: null,
    shouldUpdate: false
  }

  componentDidMount() {
    const { navigation } = this.props
    const { params } = navigation.state

    if (params && !params.editable) {
      this.setState({
        editable: false,
        userId: params.userId,
      })
      this.getUser(params.userId)
    } else {
      this.cameraSetUp()
      this.getUser()
    }

    this.focusListener = navigation.addListener('didFocus', () => {
      this.getUser()
      this.setState({ count: 0 })
    })
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  getUser = async (userId = null) => {
    const { data, isOk } = await getUserInfo(userId)

    if (!isOk) {
      this.setState({
        loading: false,
      })
      return Notification.error('Something went wrong')
    }

    const user = data.getUserInfo

    this.setState({
      loading: false,
      user,
    })
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
    Alert.alert('Add photo', 'Choose a photo or create one and upload it.', [
      {
        text: 'Camera',
        onPress: async () => {
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
        },
      },
      {
        text: 'Library',
        onPress: async () => {
          if (this.state.hasCameraRollPermission === false) {
          } else {
            let result = await ImagePicker.launchImageLibraryAsync()
            const userId = await AsyncStorage.getItem('userId')
            const photoData = this.createFormData(result, userId)
            this.saveAvatar(photoData)
          }
        },
      },
      {
        text: 'Cancel',
      },
    ])
  }

  saveAvatar(photoData) {
    fetch('http://134.122.68.158:3000/uploadAvatar', {
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
        Notification.error('Something went wrong while uploading the picture')
      })
  }

  createFormData = (photo, userId) => {
    const data = new FormData()
    data.append('photo', {
      name: 'Image',
      type: photo.type,
      uri: Platform.OS === OS.ANDROID ? photo.uri : photo.uri.replace('file://', ''),
    })

    data.append('userId', userId)

    return data
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  logout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out ?', [
      {
        text: 'Yes',
        onPress: () => {
          AsyncStorage.clear()
          this.props.navigation.navigate(ScreenEnum.LOG_IN)
        },
      },
      {
        text: 'No',
      },
    ])
  }

  editData = () => {
    this.setState({ shouldUpdate: true })
    this.props.navigation.navigate(ScreenEnum.EDIT, {
      user: this.state.user,
    })
  }

  update = () => {
    this.props.navigation.state.params.shouldUpdate = false
    this.getUser()    
  }

  render() {
    const { editable, loading, user, avatarUrl } = this.state

    if (loading) {
      return <Loading show={loading} />
    }

    return (
      <ProfileComponent
        user={user}
        avatarUrl={avatarUrl}
        navigate={this.props.navigation.navigate}
        takeProfilePicture={this.takeProfilePicture}
        editable={editable}
        onGoBack={this.onGoBack}
        logout={this.logout}
        editData={this.editData}
      />
    )
  }
}

export default ProfileContainer
