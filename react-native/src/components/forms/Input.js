import {StyleSheet, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Metrics, Colors, ApplicationStyles } from '../../themes'
import { Row } from '..'
import { normalizeWidth } from '../../themes/Metrics'

const {red} = Colors
const {imageSize, input} = Metrics.forms

const styles = StyleSheet.create({
  container: {
    height: input.height,
    borderWidth: Metrics.border.base,
    backgroundColor: Colors.white,
    paddingLeft: normalizeWidth(20)
  },
  textStyle: {
    margin: 0,
    textAlignVertical: 'center',
    flex: 1,
    padding: 0,
    color: Colors.primaryDark
  },
  image: {
    ...imageSize
  }
})

const {alignCenter} = ApplicationStyles

const Input = (props) => {
  const {containerStyle, textStyle, error, iconSource} = props
  let textInputRef

  let {color} = props
  const [borderColor, setBorderColor] = useState(color || Colors.primaryGray)

  const onPressInput = (textRef) => {
    textRef.focus()
    setBorderColor(color || Colors.primaryLightDark)
  }

  useEffect(() => {
    setBorderColor(color || Colors.primaryGray)
  }, [error])

  return (
    <TouchableWithoutFeedback onPress={() => onPressInput(textInputRef)}>
      <Row style={[styles.container, alignCenter, containerStyle, {borderColor}]}>
        <TextInput
          autoCapitalize='none'
          ref={textRef => {
            textInputRef = textRef
          }}
          {...props}
          placeholderTextColor={Colors.primaryGray}
          style={[styles.textStyle, textStyle]}
          onSubmitEditing={Keyboard.dismiss}
          onEndEditing={() => setBorderColor(color || Colors.primaryGray)}
        />
        {
          iconSource && <Image style={styles.image} source={iconSource} resizeMode='contain' />
        }
      </Row>
    </TouchableWithoutFeedback>
  )
}

Input.propTypes = {
  containerStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  color: PropTypes.number,
  iconSource: PropTypes.number,
  error: PropTypes.string,
  ...TextInput.propTypes
}

Input.defaultProps = {
  containerStyle: {},
  textStyle: {},
  iconSource: null,
  error: ''
}

export default Input
