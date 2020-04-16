import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import { Colors, Fonts, ApplicationStyles } from '../../themes'
import { Row } from '../general'
import Metrics, { normalizeWidth, normalizeHeight } from '../../themes/Metrics'

const {
  boldTitle,
  caption,
  smallCaption,
  primaryLightText,
  primaryDarkText,
} = Fonts.style
const { center } = ApplicationStyles
const left = normalizeWidth(12)

const styles = StyleSheet.create({
  more: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    left: -6 * left,
  },
  title: (isSmall) => ({
    paddingHorizontal: normalizeHeight(10),
    paddingVertical: isSmall ? normalizeHeight(5) : normalizeHeight(10)
  }),
  informationContainer: {
    paddingHorizontal: normalizeWidth(10),
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: normalizeWidth(10),
    borderBottomLeftRadius: normalizeWidth(10),
  },
  imageContainer: {
    flex: 3,
  },
  content: {
    flex: 8,
    padding: Metrics.margin
  },
  participantImage: {
    width: normalizeWidth(30),
    height: normalizeWidth(30),
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
  },
  detailsContainer: {
    flex: 2,
    borderBottomRightRadius: 15,
    padding: normalizeWidth(10),
    justifyContent: 'space-around',
  },
})

const EventCard = ({
  title,
  location,
  date,
  isSmall = false,
  eventImage = null,
  containerStyle,
}) => {

  return (
    <Row style={containerStyle}>
      {eventImage && (
        <View style={styles.imageContainer}>
          <Image resizeMode="cover" style={styles.image} source={{ uri: eventImage }} />
        </View>
      )}
      <View style={styles.content}>
        <Text style={[boldTitle, primaryDarkText, styles.title(isSmall)]}>
          {title}
        </Text>
        <View style={styles.informationContainer}>
          <Text style={[caption, primaryLightText, {marginBottom: Metrics.margin}]}>
            {location}
          </Text>
          <Text style={[caption, primaryLightText]}>
            {dayjs(date).format('DD MMM YYYY')}
          </Text>
        </View>
      </View>
    </Row>
  )
}

export default EventCard
