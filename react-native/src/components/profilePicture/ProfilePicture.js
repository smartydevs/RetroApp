import React, { useState } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Colors } from '../../themes'
import { Row } from '..'

const { center } = ApplicationStyles
const { green, orange, yellow, primaryYellow, red, white, primaryDarkYellow, gray, cream } = Colors

const backgroundColors = [green, orange, yellow, primaryYellow, primaryDarkYellow, red, white, gray, cream]

const DefaultProfilePicture = ({ firstName, lastName, style = null, textStyle, imageSource }) => {
  const [colorNum] = useState(Math.floor(Math.random() * 9))

  const getBackgroundColor = () => {
    const backgroundColor = backgroundColors[colorNum]
    return { backgroundColor }
  }

  const onFormatLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'A'
  }
  if (!imageSource)
    return (
      <Row style={[center, getBackgroundColor(), style]}>
        <Text style={textStyle}>{onFormatLetter(firstName)}</Text>
        <Text style={textStyle}>{onFormatLetter(lastName)}</Text>
      </Row>
    )
}

DefaultProfilePicture.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  style: PropTypes.oneOf([Array, Object]),
  textStyle: PropTypes.oneOf([Array, Object])
}

export default DefaultProfilePicture
