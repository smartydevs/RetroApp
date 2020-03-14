import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HomeContainer } from './home'
import { SearchContainer } from './search'
import { NotificationContainer } from './notification'
import { ProfileContainer } from './profile'
import { normalizeHeight } from '../../themes/Metrics'
import { Colors } from '../../themes'


const [MAIN, NOTIFICATION, SEARCH, PROFILE, CREATE] = ['Main', 'Notification', 'Search', 'Profile', 'Create']

const BottomNavigatorContainer = createBottomTabNavigator(
  {
    [MAIN]: {screen: HomeContainer},
    [SEARCH]: {screen: SearchContainer},
    // [CREATE]: {screen: ''},
    [NOTIFICATION]: {screen: NotificationContainer},
    [PROFILE]: {screen: ProfileContainer}
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        height: normalizeHeight(48),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0
      },
      adaptive: true,
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
        height: '100%'
      },
      safeAreaInset: {
        bottom: 'never',
        top: 'never'
      }
    },

    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarOnPress: ({navigation, defaultHandler}) => {
          defaultHandler()
        },
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state

          const iconConfig = icons[routeName]
          const iconStyle = icons[routeName].style
          const icon = iconConfig[routeName]

          return (
            //will be replaced with icons
            <Text style={[iconStyle, {color: 'white'}]}>
              {routeName}
            </Text>
          )
        }
      }
    }
  }
)

const icons = {
  [MAIN]: {
    style: {}
  },
  [SEARCH]: {
    style: {}
  },
  [CREATE]: {
    style: {}
  },
  [NOTIFICATION]: {
    style: {}
  },
  [PROFILE]: {
    style: {}
  }
}
export default BottomNavigatorContainer
