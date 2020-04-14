import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { HomeContainer } from './home'
import { SearchContainer } from './search'
import { NotificationContainer } from './notification'
import { ProfileContainer } from './profile'
import { CreateEventContainer } from './createEvent'

import { normalizeHeight, normalizeWidth } from '../../themes/Metrics'
import { Colors } from '../../themes'
import { BottomStackScreensEnum } from '../../lib/enums'

const {MAIN, NOTIFICATION, SEARCH, PROFILE, CREATE} = BottomStackScreensEnum

const BottomNavigatorContainer = createBottomTabNavigator(
  {
    [MAIN]: {screen: HomeContainer},
    [SEARCH]: {screen: SearchContainer},
    [CREATE]: {screen: CreateEventContainer},
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
        borderTopWidth: 0,
        shadowColor: Colors.dark,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9
      },
      adaptive: true,
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark,
        height: '100%'
      },
      safeAreaInset: {
        bottom: 'never',
        top: 'never'
      },
    },

    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarOnPress: ({navigation, defaultHandler}) => {
          defaultHandler()
        },
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state

          const iconConfig = icons[routeName]
          const icon = iconConfig.icon

          const color = focused ? Colors.primaryAqua : Colors.white

          return (
            <Ionicons style={{color}} name={icon} size={30} />
          )
        }
      }
    }
  }
)

const icons = {
  [MAIN]: {
    icon: 'md-home'
  },
  [SEARCH]: {
    icon: 'md-search'
  },
  [CREATE]: {
    icon: 'md-create'
  },
  [NOTIFICATION]: {
    icon: 'md-notifications-outline'
  },
  [PROFILE]: {
    icon: 'md-person'
  }
}
export default BottomNavigatorContainer
