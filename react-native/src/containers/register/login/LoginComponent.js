import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, } from 'react-native'
import { OS } from '../../../lib/enums'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { ApplicationStyles, Images, Fonts, Colors } from '../../../themes'
import { Input, TextButton, Separator } from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import strings from '../../../lib/stringEnums'
import styles from './styles'

const { container, center, marginVertical } = ApplicationStyles
const { bigBoldTitle, creamText, boldTitle, button, primaryPinkText } = Fonts.style

const LoginComponent = ({ onPressLogin, onPressForgotPassword,
  onPressSignUp, onChangePassword, onChangeEmail, email, password }) => {
  return (
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
            containerStyle={[styles.inputContainer]}
            placeholder={strings.email}
            onChangeText={onChangeEmail}
            value={email}
          />
          <Input
            placeholder={strings.password}
            autoCompleteType={'password'}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry
          />
        </View>
        <TextButton
          textStyle={[boldTitle, creamText]}
          text={strings.forgotPassword}
          onPress={onPressForgotPassword}
          style={marginVertical}
        />
        <TextButton
          style={[styles.login]}
          onPress={onPressLogin}
          text={strings.login}
        />
        <TextButton
          text={strings.notOnApp}
          onPress={() => {
            Keyboard.dismiss()
            onPressSignUp()
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

LoginComponent.propTypes = {
  onPressForgotPassword: PropTypes.func.isRequired,
  onPressLogin: PropTypes.func.isRequired,
  onPressSignUp: PropTypes.func.isRequired
}

export default LoginComponent
