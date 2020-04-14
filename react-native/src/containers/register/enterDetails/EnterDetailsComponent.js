import React from 'react'
import { Keyboard, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

import { ApplicationStyles, Fonts } from '../../../themes'
import {Input, TextButton} from '../../../components'
import { OS } from '../../../lib/enums'

import styles from './styles'
import strings from '../../../lib/stringEnums'

const { container, center } = ApplicationStyles
const { bigBoldTitle, whiteText } = Fonts.style

const EnterDetailsComponent = ({ firstName, lastName, onChangeLastName, onChangeFirstName, onRegisterDetails }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView
        behavior={OS.IOS === Platform.OS ? 'position' : 'height'}
        contentContainerStyle={[container, center, styles.container]}
        style={OS.IOS === Platform.OS ? container : [container, center, styles.container]}
        enabled
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
