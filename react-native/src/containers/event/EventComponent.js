import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { ApplicationStyles, Colors, Fonts } from '../../themes'
import { Header, Row, ProfilePicture, TextButton } from '../../components'
import { normalizeHeight } from '../../themes/Metrics'
import styles from './styles'

const { container, center } = ApplicationStyles
const {
  bigBoldTitle,
  whiteText,
  caption,
  button,
  grayText,
  primaryDarkText,
} = Fonts.style

const EventComponent = ({
  onGoBack,
  onGoToUserPage,
  onPressToggleJoinButton,
  userJoined,
  eventData: {
    photo,
    title,
    location: { addressName },
    startDate,
    description,
    users,
    organiser,
  },
}) => {
  const renderParticipants = ({
    profile: { firstName, lastName, profilePicture = null, _id },
  }) => (
    <TouchableOpacity onPress={() => onGoToUserPage(_id)}>
      <Row style={styles.participant}>
        <ProfilePicture
          imageSource={profilePicture}
          firstName={firstName}
          lastName={lastName}
          style={styles.profilePicture}
          textStyle={button}
        />
        <Text>
          {firstName} {lastName}
        </Text>
      </Row>
    </TouchableOpacity>
  )
  console.log('photo event', photo)
  const eventImageUrl = photo ? photo.fullPath : null
  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} />
      <ScrollView>
        <ImageBackground
          source={eventImageUrl && { uri: eventImageUrl }}
          style={styles.eventImage}
          resizeMode="contain"
        >
          <View style={styles.overlay}>
            <Text style={[bigBoldTitle, whiteText]}>{title}</Text>
          </View>
        </ImageBackground>
        <View style={styles.separator} />
        <Row
          style={[styles.lightGrayContainer, styles.padding, { alignItems: 'center' }]}
        >
          <View style={[styles.icon, center]}>
            <Ionicons size={20} name="md-map" style={{ color: Colors.lightGray }} />
          </View>
          <View>
            <Text style={[button, grayText, { marginBottom: normalizeHeight(5) }]}>
              {addressName}
            </Text>
            <Text style={[caption, primaryDarkText]}>
              {dayjs(startDate).format('DD MMMM YYYY, HH:mm')}
            </Text>
          </View>
        </Row>
        <Row style={[styles.padding, { alignItems: 'center' }]}>
          <View style={[styles.icon, center]}>
            <Ionicons size={20} name="md-help" style={{ color: Colors.lightGray }} />
          </View>
          <Text style={[caption, primaryDarkText, { flex: 1 }]}>{description}</Text>
        </Row>
        <View style={[styles.lightGrayContainer, styles.padding]}>
          <Text style={[button, grayText, { marginBottom: normalizeHeight(5) }]}>
            {users && users.length > 0
              ? 'People going to this event'
              : 'Be the first one to go to this event !'}
          </Text>
          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            bounces={false}
            keyExtractor={({ _id }) => _id}
            data={users}
            renderItem={({ item }) => renderParticipants(item)}
            numColumns={2}
          />
        </View>
        <TouchableOpacity onPress={() => onGoToUserPage(organiser._id)}>
          <Row style={[styles.padding, { alignItems: 'center' }]}>
            <ProfilePicture
              imageSource={organiser.profile.avatar}
              firstName={organiser.profile.firstName}
              lastName={organiser.profile.lastName}
              style={[styles.profilePicture, styles.organiser]}
              textStyle={button}
            />
            <View>
              <Text style={[button, grayText, { marginBottom: normalizeHeight(5) }]}>
                Organiser of this event
              </Text>
              <Text style={[caption, primaryDarkText]}>
                {organiser.profile.firstName} {organiser.profile.lastName}
              </Text>
            </View>
          </Row>
        </TouchableOpacity>
        <View style={[styles.lightGrayContainer, styles.padding]}>
          <TextButton
            text={userJoined ? 'Leave Event' : 'Join Event'}
            style={{ backgroundColor: userJoined ? Colors.red : Colors.primaryDark }}
            onPress={onPressToggleJoinButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventComponent
