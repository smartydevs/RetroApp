import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ApplicationStyles, Fonts } from '../../../themes'
import { Input, TextButton } from '../../../components'

import styles from './styles'
import strings from '../../../lib/stringEnums'

const { container, center } = ApplicationStyles
const { bigBoldTitle, whiteText } = Fonts.style

const EnterDetailsComponent = ({ firstName, lastName, onChangeLastName, onChangeFirstName, onRegisterDetails }) => {
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={[container, center, styles.screen]}
      enableOnAndroid={false}
    >
      <Ionicons
        name={'md-person'}
        size={100}
        style={styles.userIcon}
      />
      <Text
        style={[styles.enterDetails, bigBoldTitle, whiteText]}
      >
        {strings.enterDetailsDescription}
      </Text>
      <Input
        containerStyle={[styles.inputContainer]}
        placeholder={strings.firstName}
        onChangeText={onChangeFirstName}
        value={firstName}
      />
      <Input
        containerStyle={[styles.inputContainer]}
        placeholder={strings.lastName}
        onChangeText={onChangeLastName}
        value={lastName}
      />
      <TextButton
        style={[styles.signup]}
        text={strings.signup}
        onPress={onRegisterDetails}
      />
    </KeyboardAwareScrollView>
  )
}

EnterDetailsComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onChangeFirstName: PropTypes.func.isRequired,
  onChangeLastName: PropTypes.func.isRequired,
  onRegisterDetails: PropTypes.func.isRequired
}


export default EnterDetailsComponent
