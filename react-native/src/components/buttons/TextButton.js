import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { StyleSheet, Text, ActivityIndicator } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../themes'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrics.buttons.small,
    borderRadius: Metrics.borderRadius.default,
  },
  text: {
    ...Fonts.style.button,
    color: Colors.white
  }
})

const TextButton = ({ style, onPress, text, textStyle, isLoading, hasChildren, children }) => (
  <Button onPress={onPress} style={[styles.container, ApplicationStyles.center, style]}>
    {
      isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        hasChildren ? children : <Text style={[styles.text, textStyle]}>{text}</Text>
      )
    }
  </Button>
)

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  hasChildren: PropTypes.bool,
  children: PropTypes.instanceOf(Object),
  textStyle: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]),
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

TextButton.defaultProps = {
  style: styles.container,
  isLoading: false,
  hasChildren: false,
  children: null,
  textStyle: styles.text
}

export default TextButton
