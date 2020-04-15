import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { ApplicationStyles, Fonts } from '../../themes'

import { Header } from '../../components'
import styles from './styles'

const { center, shadow, container } = ApplicationStyles
const { boldTitle, grayText } = Fonts.style

const EditComponent = ({ onGoBack, user }) => {
  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} />
      <ScrollView bounces={false}>
        <Text style={[boldTitle, grayText, styles.title]}>
          Edit your info 
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditComponent
