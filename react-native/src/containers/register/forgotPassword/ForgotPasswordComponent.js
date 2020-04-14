import React from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Images, Fonts } from '../../../themes'

import styles from './styles'
import strings from '../../../lib/stringEnums'
import { Input, TextButton } from '../../../components'
import { OS } from '../../../lib/enums'

const { container, center } = ApplicationStyles
const { bigBoldTitle, creamText } = Fonts.style

const ForgotPasswordComponent = ({ onChangeEmail, onChangePassword, onChangeRepeatPassword, email,
  password, repeatPassword, onPressChangePassword }) => (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView
        behavior={OS.IOS === Platform.OS ? 'position' : 'height'}
        contentContainerStyle={[container, center, styles.screen]}
        style={OS.IOS === Platform.OS ? container : [container, center, styles.screen]}
        enabled
      >
        <Image
          source={Images.logo}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <Text style={[styles.title, bigBoldTitle, creamText]}>
          Change your password
        </Text>
        <View style={styles.maxWidth}>
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={strings.email}
            onChangeText={onChangeEmail}
            value={email}
          />
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={strings.password}
            autoCompleteType={'password'}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry
          />
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={strings.repeatPassword}
            autoCompleteType={'password'}
            onChangeText={onChangeRepeatPassword}
            value={repeatPassword}
            secureTextEntry
          />
        </View>
        <TextButton
          style={[styles.changePassword]}
          onPress={() => {
            Keyboard.dismiss();
            onPressChangePassword()
          }}
          text={'Change Password'}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )

ForgotPasswordComponent.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onPressChangePassword: PropTypes.func.isRequired,
}

export default ForgotPasswordComponent
