import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { ApplicationStyles, Images, Fonts, Colors } from '../../../themes'
import { Input, TextButton } from '../../../components'

import strings from '../../../lib/stringEnums'
import styles from './styles'

const {container, center, marginVertical} = ApplicationStyles
const {bigBoldTitle, creamText, boldTitle, button} = Fonts.style

const LoginComponent = ({onPressLogin, onPressForgotPassword, onPressFacebook,
  onChangePassword, onChangeEmail, email, password}) => {
  return (
    <View style={[container, center, styles.screen]}>
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
          placeholder={strings.password}
          autoCompleteType={'password'}
          onChangePassword={onChangePassword}
          value={password}
          secureTextEntry
        />
      </View>
      <TextButton
        textStyle={[boldTitle, creamText, marginVertical]}
        text={strings.forgotPassword}
        onPress={onPressForgotPassword}
      />
      <TextButton
        style={[styles.login]}
        onPress={onPressLogin}
        text={strings.login}
      />
      <Text style={[bigBoldTitle, creamText, marginVertical]}>
        {strings.or.toUpperCase()}
      </Text>
      <TextButton
        style={[styles.facebook]}
        onPress={onPressFacebook}
        hasChildren
      >
        <Ionicons
          name={'facebook-with-circle'}
          size={24}
          style={styles.facebookLogo}
        />
        <Text style={[button, creamText]}>{strings.facebookLogin}</Text>
      </TextButton>
    </View>
  )
}

LoginComponent.propTypes = {
  onPressFacebook: PropTypes.func.isRequired,
  onPressForgotPassword: PropTypes.func.isRequired,
  onPressLogin: PropTypes.func.isRequired
}

export default LoginComponent
