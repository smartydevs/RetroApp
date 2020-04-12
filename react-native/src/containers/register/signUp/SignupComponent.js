import React from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Images, Fonts } from '../../../themes'

import styles from './styles'
import strings from '../../../lib/stringEnums'
import { Input, TextButton } from '../../../components'
import { Ionicons } from '@expo/vector-icons'
import { OS } from '../../../lib/enums'

const { container, center, marginVertical } = ApplicationStyles
const { bigBoldTitle, creamText, button } = Fonts.style

const SignupComponent = ({onChangeEmail, onChangePassword, onChangeRepeatPassword, email,
  password, repeatPassword, onPressFacebook, onPressSignUp}) => (
  <KeyboardAvoidingView
    behavior={OS.IOS === Platform.OS ? 'position' : 'height'}
    contentContainerStyle={[container, center, styles.screen]}
    style={[container, center, styles.screen]}
    enabled
  >
    <Image
      source={Images.logo}
      style={styles.logo}
      resizeMode={'contain'}
    />
    <Text style={[styles.welcome, bigBoldTitle, creamText]}>
      {strings.welcome}
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
    <TextButton style={[styles.signup]} onPress={onPressSignUp} text={strings.signup} />
    <Text style={[bigBoldTitle, creamText, marginVertical]}>
      {strings.or.toUpperCase()}
    </Text>
    <TextButton style={[styles.facebook]} onPress={onPressFacebook} hasChildren>
      <Ionicons name={'logo-facebook'} size={28} style={styles.facebookLogo} />
      <Text style={[button, creamText]}>{strings.facebookLogin}</Text>
    </TextButton>
  </KeyboardAvoidingView>
)

SignupComponent.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onPressFacebook: PropTypes.func.isRequired,
  onPressSignUp: PropTypes.func.isRequired,
}

export default SignupComponent
