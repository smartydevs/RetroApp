import { createAppContainer } from 'react-navigation'
import styles from './Styles/NavigationStyles'
import { ScreenEnum } from '../lib/enums'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight, fromBottom } from 'react-navigation-transitions'
import BottomNavigatorContainer from '../containers/main/BottomNavigatorContainer'
import LoadingContainer from '../containers/loading/LoadingContainer'
import LoginContainer from '../containers/register/login/LoginContainer'
import SignupContainer from '../containers/register/signUp/SignupContainer'
import ChooseFeedContainer from '../containers/register/chooseFeed/ChooseFeedContainer'
import EnterDetailsContainer from '../containers/register/enterDetails/EnterDetailsContainer'

const { SIGN_UP, LOADING, LOG_IN, ENTER_DETAILS, MAIN, CHOOSE_FEED } = ScreenEnum

const animator = (toTransitionProps) => {
  const { routeName } = toTransitionProps.scene.route
  if (routeName === CREATE_BET) {
    return fromBottom()
  }
  return fromRight()
}

const PrimaryNav = createStackNavigator({
  [LOADING]: { screen: LoadingContainer },
  [LOG_IN]: { screen: LoginContainer },
  [SIGN_UP]: { screen: SignupContainer },
  [ENTER_DETAILS]: { screen: EnterDetailsContainer },
  [CHOOSE_FEED]: { screen: ChooseFeedContainer },
  [MAIN]: { screen: BottomNavigatorContainer },
}, {
  headerMode: 'none',
  initialRouteName: MAIN,
  navigationOptions: {
    headerStyle: styles.header,
  },
  transitionConfig: animator
})

export default createAppContainer(PrimaryNav)
