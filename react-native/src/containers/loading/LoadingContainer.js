import React from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import ApiClient from '../../api/client'
import { ScreenEnum } from '../../lib/enums'

const { MAIN, LOG_IN } = ScreenEnum

class LoadingContainer extends React.Component {
  componentDidMount () {
    ApiClient.currentInstance()
  }

  render () {
    const token = ApiClient.getToken()
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: token ? MAIN : LOG_IN })]
    })
    this.props.navigation.dispatch(resetAction)
    return null
  }
}

export default LoadingContainer
