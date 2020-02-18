import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Image } from 'react-native'

const ImageButton = ({ style, onPress, source, resizeMode = 'contain' }) => (
  <Button onPress={onPress}>
    <Image
      resizeMode={resizeMode}
      source={source}
      style={style}
    />
  </Button>
)

ImageButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  source: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]).isRequired
}

export default ImageButton
