import { createAppContainer } from 'react-navigation'
import styles from './Styles/NavigationStyles'
import { ScreenEnum } from '../lib/enums'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight } from 'react-navigation-transitions'
import {
  EventContainer, EnterDetailsContainer, ChooseFeedContainer, SignupContainer,
  LoginContainer, LoadingContainer, BottomNavigationContainer, ForgotPasswordContainer,
  ProfileContainer, EditContainer, ReviewsContainer, ContactContainer } from '../containers'

const {
  SIGN_UP,
  LOADING,
  LOG_IN,
  ENTER_DETAILS,
  MAIN,
  CHOOSE_FEED,
  EVENT,
  FORGOT_PASSWORD,
  USER_PROFILE,
  EDIT,
  REVIEWS,
  CONTACT_US
} = ScreenEnum

const PrimaryNav = createStackNavigator(
  {
    [LOADING]: { screen: LoadingContainer },
    [LOG_IN]: { screen: LoginContainer },
    [SIGN_UP]: { screen: SignupContainer },
    [ENTER_DETAILS]: { screen: EnterDetailsContainer },
    [CHOOSE_FEED]: { screen: ChooseFeedContainer },
    [MAIN]: { screen: BottomNavigationContainer },
    [EVENT]: { screen: EventContainer },
    [FORGOT_PASSWORD]: { screen: ForgotPasswordContainer },
    [USER_PROFILE]: { screen: ProfileContainer },
    [EDIT]: { screen: EditContainer },
    [REVIEWS]: { screen: ReviewsContainer },
    [CONTACT_US]: { screen: ContactContainer }
  },
  {
    headerMode: 'none',
    initialRouteName: LOADING,
    navigationOptions: {
      headerStyle: styles.header,
    },
    transitionConfig: fromRight(),
  }
)

export default createAppContainer(PrimaryNav)
