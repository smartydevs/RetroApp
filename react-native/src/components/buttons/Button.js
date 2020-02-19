import React from 'react'
import {TouchableOpacity} from 'retro-web-native'
import PropTypes from 'prop-types'

const Button = ({ style, onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object),
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

Button.defaultProps = {
  style: {},
  children: null
}

export default Button
