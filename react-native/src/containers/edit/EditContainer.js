import React, { Component } from 'react'
import { Alert } from 'react-native'

import { EditComponent } from '.'
import { Loading } from '../../components'

class EditContainer extends Component {
  state = {
    loading: true,
    user: {}
  }

  componentDidMount () {
    this.setState({
      user: this.props.navigation.state.params,
      loading: false
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

  render () {
    const { user, loading } = this.state

    if (loading) {
      return <Loading show={loading} />
    }

    return (
      <EditComponent
        onGoBack={this.onGoBack}
        user={user}
      />
    )
  }
}

export default EditContainer
