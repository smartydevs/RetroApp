import {StyleSheet, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Metrics, Colors, ApplicationStyles } from '../../themes'
import { Row } from '..'
import { normalizeWidth, normalizeHeight } from '../../themes/Metrics'

const {white, black, primaryGray} = Colors
const {imageSize, input} = Metrics.forms

const styles = StyleSheet.create({
  container: {
    height: input.height,
    // borderWidth: Metrics.border.base,
    backgroundColor: white,
    paddingHorizontal: normalizeWidth(20),
    borderRadius: normalizeWidth(10),
    justifyContent: 'flex-start'
  },
  textStyle: {
    margin: 0,
    textAlignVertical: 'center',
    flex: 1,
    padding: 0,
    color: black,
  },
  image: {
    ...imageSize
  }
})

const {alignCenter, shadow} = ApplicationStyles

const Input = (props) => {
  const {containerStyle, textStyle, iconSource} = props
  let textInputRef

  let {color} = props

  const onPressInput = (textRef) => {
    textRef.focus()
  }

  return (
    <TouchableWithoutFeedback onPress={() => onPressInput(textInputRef)}>
      <Row style={[styles.container, alignCenter, containerStyle, shadow]}>
        <TextInput
          autoCapitalize='none'
          ref={textRef => {
            textInputRef = textRef
          }}
          {...props}
          placeholderTextColor={primaryGray}
          style={[styles.textStyle, textStyle]}
          onSubmitEditing={Keyboard.dismiss}
          onEndEditing={() => setBorderColor(color || primaryGray)}
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
  ...TextInput.propTypes
}

Input.defaultProps = {
  containerStyle: {},
  textStyle: {},
  iconSource: null,
}

export default Input
