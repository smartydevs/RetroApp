import * as React from 'react'
import { BackHandler, Platform } from 'retro-web-native'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'retro-web-navigation-redux-helpers'
import { connect } from 'retro-web-redux'
import AppNavigation from './AppNavigation'
import { ScreenEnum } from '../lib/enums'
import NavigationService from './NavigationService'

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  (state) => state.nav,
  'root'
)

const ReduxAppNavigator = createReduxContainer(AppNavigation, 'root')

class ReduxNavigation extends React.Component {
  componentDidMount () {
    NavigationService.setTopLevelNavigator(this.props)
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      if (nav.routes.length === 1 && (nav.routes[0].routeName === ScreenEnum.LOADING)) {
        return false
      }
      dispatch({ type: 'navigation/BACK' })
      return true
    })
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress', undefined)
  }

  render () {
    return <ReduxAppNavigator dispatch={this.props.dispatch} state={this.props.nav} />
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})
export default connect(mapStateToProps)(ReduxNavigation)
