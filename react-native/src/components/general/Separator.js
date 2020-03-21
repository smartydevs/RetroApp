import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet} from 'react-native'
import { Colors, ApplicationStyles } from '../../themes'
import Metrics, { normalizeHeight } from '../../themes/Metrics'

const { shadow } = ApplicationStyles

const styles = StyleSheet.create({
  separator: (width) => ({
    width: width || '100%',
    borderWidth: 0.5,
    height: normalizeHeight(2),
    backgroundColor: Colors.primaryLight,
    alignSelf: "center",
  }),
  margin: {
    marginVertical: Metrics.margin
  }
})

const Separator = ({width, style}) => {
  return <View style={[styles.separator(width), shadow, styles.margin, style]} />
}

Separator.propTypes = {
  width: PropTypes.string.isRequired,
  style: PropTypes.oneOf(Array, Object)
}

export default Separator
