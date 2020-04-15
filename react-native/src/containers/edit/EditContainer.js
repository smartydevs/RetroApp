import React, { Component } from 'react'
import { Alert } from 'react-native'

import { EditComponent } from '.'
import { Loading, Notification } from '../../components'
import { getCategories, updateUserInfo } from '../../api'

class EditContainer extends Component {
  state = {
    loading: true,
    user: {},
    editable: false
  }

  async componentDidMount () {
    const { email, followingCategories, profile: { firstName, lastName }} = this.props.navigation.state.params.user
    // console.log(this.props.navigation.state.params)
    await this.getCategories(followingCategories)

    this.setState((prevState) => ({
      user : {
        ...prevState.user,
        email,
        firstName,
        lastName,
      },
      loading: false,
    }))

    setTimeout(() => {
      this.setState({ editable: true })
    }, 100)
  }

  getCategories = async (followingCategories) => {
    getCategories().then(({ data, isOk }) => {
      if (isOk) {
        const { getCategories = [] } = data
        const categories = getCategories.map(cat => {
          const isSelected = followingCategories && followingCategories.find(c => c._id === cat._id)
          return {
            _id: cat._id,
            name: cat.name,
            imageSource: cat.photo.fullPath,
            isSelected: !!isSelected
          }
        })

        this.setState(prevState => ({
          isLoading: false,
          user: {
            ...prevState.user,
            categories
          },
        }))
      } else {
        this.setState({ isLoading: false })
        return Notification.error(strings.error)
      }
    })
  }

  onGoBack = () => {
    Alert.alert('Go Back', 'If you go back all your changes will be lost. Are you sure you want to do this ?', [{
      text: 'Yes',
      onPress: this.props.navigation.goBack
    }, {
      text: 'No'
    }])
  }

  onCardPress = categoryId => {
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        categories: prevState.user.categories.map(c => {
          if (c._id === categoryId) {
            c.isSelected = !c.isSelected
          }
          return c
        })
      }
    }))
  }

  onPressSave = () => {
    const { firstName, lastName, email, categories} = this.state.user
    const { email : initialEmail } = this.props.navigation.state.params.user

    const categoriesId = categories.map(c => {
      if (c.isSelected) {
        return c._id
      }
    })

    const payload = {
      firstName, 
      lastName,
      categoriesId
    }

    if (initialEmail !== email.trim()) {
      payload.email = email.trim()
    }

    Alert.alert('Save', 'If you save this your previous data will be lost for ever. Are you sure you want to do this ?', [{
      text: 'Yes',
      onPress: async () => {
        
        const { data, isOk } = await updateUserInfo(payload)

        if (!isOk) {
          return Notification.error('Something went wrong while uploading the data. Please Try again')
        }

        this.props.navigation.goBack()
      }
    }, {
      text: 'No'
    }])
  }

  render () {
    const { user, loading, editable } = this.state
    console.log(user)

    if (loading) {
      return <Loading show={loading} />
    }

    return (
      <EditComponent
        onGoBack={this.onGoBack}
        user={user}
        onCardPress={this.onCardPress}
        onPressSave={this.onPressSave}
        editable={editable}
      />
    )
  }
}

export default EditContainer
