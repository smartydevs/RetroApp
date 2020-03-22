import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../themes'
import { Row } from '../general'
import { normalizeWidth } from '../../themes/Metrics'

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
  titleContainer: {
    flex: 1,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    padding: normalizeWidth(10),
  },
  informationContainer: {
    padding: normalizeWidth(10),
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: normalizeWidth(10),
    borderBottomLeftRadius: normalizeWidth(10),
  },
  imageContainer: {
    flex: 3,
    borderRadius: 25,
  },
  content: {
    flex: 8,
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
  participants = [],
  date,
  isSmall = false,
  eventImage = 'https://picsum.photos/1920/1080',
  containerStyle,
}) => {
  const userParticipants = participants ? participants : []
  const renderParticipants = () => {
    if (!userParticipants) {
      return
    }

    if (userParticipants.length < 7) {
      return userParticipants.map((participant, i) => (
        <Image
          key={i}
          style={[styles.participantImage, { left: -(i * left) }]}
          source={{ uri: participant.profilePicture }}
        />
      ))
    }

    return userParticipants
      .slice(0, 6)
      .map((participant, i) => (
        <Image
          key={i}
          style={[styles.participantImage, { left: -(i * left) }]}
          source={{ uri: participant.profilePicture }}
        />
      ))
  }

  return (
    <Row style={containerStyle}>
      <View style={styles.imageContainer}>
        <Image resizeMode="cover" style={styles.image} source={{ uri: eventImage }} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[boldTitle, primaryDarkText]}>{title}</Text>
        </View>
        <Row style={styles.informationContainer}>
          <Text style={[caption, primaryLightText]}>{location}</Text>
          <Text style={[caption, primaryLightText]}>{date}</Text>
        </Row>
        {!isSmall ? (
          <View style={styles.detailsContainer}>
            <Text style={[caption, primaryLightText]}>
              {participants ? participants.length : null} people going
            </Text>
            <Row>
              {renderParticipants()}
              {userParticipants.length > 6 ? (
                <View style={[styles.more, styles.participantImage, center]}>
                  <Text style={[smallCaption, primaryLightText]}>
                    {userParticipants.length < 105
                      ? `+${userParticipants.length - 6}`
                      : '99+'}
                  </Text>
                </View>
              ) : null}
            </Row>
          </View>
        ) : null}
      </View>
    </Row>
  )
}

export default EventCard
