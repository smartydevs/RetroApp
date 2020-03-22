import React, { useState } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Colors, Fonts } from '../../themes'
import { Row } from '..'

const { center } = ApplicationStyles
const { green, blue, red, primaryAqua, primaryPink, white, cream, light, primaryLight, lightGray, gray, primaryDark } = Colors
const { button, bigTitle, title, bigBoldTitle, boldTitle } = Fonts.style


const backgroundColors = [green, blue, red, primaryAqua, primaryPink, white, cream, primaryLight, lightGray, gray, primaryDark]

const ProfilePicture = ({ firstName, lastName, style = null, textStyle, imageSource, onPress }) => {
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
        <Text style={[bigBoldTitle, textStyle]}>{onFormatLetter(firstName)}</Text>
        <Text style={[bigBoldTitle, textStyle]}>{onFormatLetter(lastName)}</Text>
      </Row>
    )
  
}

ProfilePicture.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  style: PropTypes.oneOf([Array, Object]),
  textStyle: PropTypes.oneOf([Array, Object])
}

export default ProfilePicture
