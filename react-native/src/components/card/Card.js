import React from 'react'
import { Image as ImageNative, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Card = ({
  cardStyle,
  containerStyle,
  onPress,
  imageSource,
  resizeMode = 'cover',
  title,
  titleStyle,
}) => (
  <TouchableWithoutFeedback style={containerStyle} onPress={onPress}>
    <React.Fragment>
      <ImageNative
        style={cardStyle}
        resizeMode={resizeMode}
        source={{ uri: imageSource }}
      />
      <Text style={titleStyle}>{title}</Text>
    </React.Fragment>
  </TouchableWithoutFeedback>
)

Card.propTypes = {
  onPress: PropTypes.func,
  cardStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array),
  ]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array),
  ]),
  titleStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array),
  ]),
  title: PropTypes.string,
}
Card.defaultProps = {
  onPress: null,
  cardStyle: null,
  containerStyle: null,
  titleStyle: null,
  title: null,
}
export default Card
