import React from 'react'
import { View, Text } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Ionicons } from '@expo/vector-icons'
import {Input} from '../../../components'

import styles from './styles'
import strings from '../../../lib/stringEnums'

const { container, center } = ApplicationStyles

const EnterDetailsComponent = () => {
  return (
    <View style={[container, center, styles.container]}>
      <Ionicons
        name={'md-person'}
        size={100}
        style={styles.userIcon}
      />
      <Text>{strings.enterDetailsDescription}</Text>
      <Input />
      <Input />
    </View>
  )
}

export default EnterDetailsComponent
