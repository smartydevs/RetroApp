import { NavigationActions } from 'react-navigation'

const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]

  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

const screenTracking = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK
  ) {
    return next(action)
  }

  const currentScreen = getCurrentRouteName(getState().nav)
  const result = next(action)
  const nextScreen = getCurrentRouteName(getState().nav)
  if (nextScreen !== currentScreen) {
    try {
      // Example: Analytics.trackEvent('user_navigation', {currentScreen, nextScreen})
    } catch (e) {

    }
  }
  return result
}

export default screenTracking
