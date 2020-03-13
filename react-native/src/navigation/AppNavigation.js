import { createAppContainer } from 'react-navigation'
import styles from './Styles/NavigationStyles'
import { ScreenEnum } from '../lib/enums'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight } from 'react-navigation-transitions'
import BottomNavigatorContainer from '../containers/main/BottomNavigatorContainer'
import LoadingContainer from '../containers/loading/LoadingContainer'
import LoginContainer from '../containers/register/login/LoginContainer'
import SignupContainer from '../containers/register/signUp/SignupContainer'
import ChooseFeedContainer from '../containers/register/chooseFeed/ChooseFeedContainer'
import EnterDetailsContainer from '../containers/register/enterDetails/EnterDetailsContainer'

const { SIGN_UP, LOADING, LOG_IN, ENTER_DETAILS, MAIN, CHOOSE_FEED } = ScreenEnum

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
    headerStyle: styles.header
  },
  transitionConfig: fromRight()
})

export default createAppContainer(PrimaryNav)
