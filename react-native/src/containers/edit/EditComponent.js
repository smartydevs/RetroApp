import React, { useReducer } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { ApplicationStyles, Fonts } from '../../themes'

import { Header, Input } from '../../components'
import styles from './styles'
import { reducer } from './reducer'

const { center, shadow, container } = ApplicationStyles
const { boldTitle, grayText, button } = Fonts.style

const EditComponent = ({ onGoBack, user }) => {

  console.log(user)

  const [eventState, dispatch] = useReducer(reducer, user)

  console.log(eventState)

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} />
      <ScrollView bounces={false}>
        <Text style={[boldTitle, grayText, styles.title]}>
          Edit your info 
        </Text>
        <View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Email
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'email', payload: value })}
              value={eventState.email}
            />
          </View>

          <View style={[styles.padding]}>
            <Text style={[styles.label, button, grayText]}>
              First Name
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'firstName', payload: value })}
              value={eventState.firstName}
            />
          </View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Last Name
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'lastName', payload: value })}
              value={eventState.lastName}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditComponent
