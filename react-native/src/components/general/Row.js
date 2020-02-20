import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

const Row = ({ style, children }) => (
  <View style={[style, styles.container]}>
    {children}
  </View>
)

Row.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

Row.defaultProps = {
  style: styles.container
}

export default Row
