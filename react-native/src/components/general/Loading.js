import React from 'react'
import { View, ActivityIndicator } from 'retro-web-native'
import PropTypes from 'prop-types'
import { Colors, ApplicationStyles } from '../../themes'

const { space, center, container } = ApplicationStyles

const Loading = ({ show, style }) => {
  return show ? (
    <View
      style={[space, center, style || container]}
    >
      <ActivityIndicator
        size='large'
        color={Colors.yellow}
      />
    </View>
  ) : null
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
  style: PropTypes.oneOf(Array, Object)
}

Loading.defaultOptions = {
  style: null
}

export default Loading
