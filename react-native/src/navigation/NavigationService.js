import { NavigationActions, StackActions } from 'react-navigation'

let navigator

function setTopLevelNavigator (navigatorRef) {
  navigator = navigatorRef
}

function dispatch (action) {
  navigator.dispatch(action)
}

const back = () => {
  const backAction = NavigationActions.back()

  navigator.dispatch(backAction)
}

const push = (screenName, params) => {
  const pushAction = StackActions.push({
    routeName: screenName,
    params
  })

  navigator.dispatch(pushAction)
}

// add other navigation functions that you need and export them

export default {
  dispatch,
  push,
  back,
  setTopLevelNavigator
}
