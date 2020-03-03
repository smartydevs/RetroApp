import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet} from 'react-native'
import { Colors } from '../../themes'
import { normalizeHeight } from '../../themes/Metrics'

const styles = StyleSheet.create({
  separator: (width) => ({
    width,
    borderWidth: 0.5,
    borderColor: Colors.primaryDark,
  }),
  margin: {
    margin: normalizeHeight(24)
  }
})

const Separator = ({width, style}) => {
  return <View style={[styles.separator(width), style || styles.margin]} />
}

Separator.propTypes = {
  width: PropTypes.string.isRequired,
  style: PropTypes.oneOf(Array, Object)
}

export default Separator
