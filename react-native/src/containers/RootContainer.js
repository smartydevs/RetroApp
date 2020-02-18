import React, { Component } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { registerRootComponent } from 'expo'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { ApplicationStyles } from '../themes'
import { Notification } from '../components'

class RootContainer extends Component {
  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
        <Notification
          ref={Notification.setRef}
        />
      </SafeAreaView>
    )
  }
}

export default registerRootComponent(RootContainer)
