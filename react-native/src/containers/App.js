import '../config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import * as Font from 'expo-font'

import ApiClient from '../api/client'
import RootContainer from './RootContainer'
import createStore from '../redux'
import { AsyncStorage } from 'react-native'
import Constants from '../lib/enums'

const store = createStore()

class App extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    AsyncStorage.clear()
    AsyncStorage.getItem(Constants.TOKEN).then(token => {
      console.log('TOKEN', token)
      ApiClient.setToken(token)
    })
    this.loadFonts()
  }

  loadFonts = () => {
    Font.loadAsync({
      'GothamRounded-Book': require('../../assets/fonts/Gotham-Rounded-Book.otf'),
      'GothamRounded-Medium': require('../../assets/fonts/Gotham-Rounded-Medium.otf'),
    }).then(() => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return null
    }

    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default registerRootComponent(App)
