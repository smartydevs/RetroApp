import React from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Images, Fonts } from '../../../themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import strings from '../../../lib/stringEnums'
import { Input, TextButton } from '../../../components'
import { OS } from '../../../lib/enums'

const { container, center } = ApplicationStyles
const { bigBoldTitle, creamText } = Fonts.style

const ForgotPasswordComponent = ({ onChangeEmail, onChangePassword, onChangeRepeatPassword, email,
  password, repeatPassword, onPressChangePassword }) => (
    <View style={[container]}><KeyboardAwareScrollView
      scrollEnabled={true}
      contentContainerStyle={[container, center, styles.screen]}
      enableOnAndroid={false}
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
    </KeyboardAwareScrollView>
    </View>
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
