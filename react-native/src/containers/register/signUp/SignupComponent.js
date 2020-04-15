import React from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Images, Fonts } from '../../../themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import strings from '../../../lib/stringEnums'
import { Input, TextButton } from '../../../components'
import { Ionicons } from '@expo/vector-icons'
import { OS } from '../../../lib/enums'

const { container, center } = ApplicationStyles
const { bigBoldTitle, creamText, primaryPinkText } = Fonts.style

const SignupComponent = ({ onChangeEmail, onChangePassword, onChangeRepeatPassword, email,
  password, repeatPassword, onPressFacebook, onPressSignUp, editable }) => (
    <View style={[container]}>
      <KeyboardAwareScrollView
        scrollEnabled={true}
        contentContainerStyle={[container, center, styles.screen]}
        enableOnAndroid={false}
      >
        <Image
          source={Images.logo}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <Text style={[styles.welcome, bigBoldTitle, creamText]}>
          Welcome to{' '}
          <Text style={primaryPinkText}>
            Retr
          </Text>
          Up
        </Text>
        <View style={styles.maxWidth}>
          <Input
            editable={editable}
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
        <TextButton style={[styles.signup]} onPress={() => {
          Keyboard.dismiss();
          onPressSignUp()
        }} text={strings.signup} />
      </KeyboardAwareScrollView>
    </View>
  )

SignupComponent.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onPressSignUp: PropTypes.func.isRequired,
}

export default SignupComponent
