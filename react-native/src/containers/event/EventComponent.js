import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../themes'
import { Header, Row, ProfilePicture } from '../../components'
import Metrics, { normalizeWidth, normalizeHeight } from '../../themes/Metrics'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const {container, center} = ApplicationStyles
const {bigBoldTitle, whiteText, caption, button, grayText, primaryDarkText} = Fonts.style

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  eventImage: {
    flex: 1,
    height: normalizeHeight(200),
  },
  overlay: {
    flex: 1,
    backgroundColor: `${Colors.primaryDark}80`,
    padding: normalizeWidth(24)
  },
  separator: {
    width: '100%',
    borderBottomColor: Colors.gray,
    borderBottomWidth: normalizeHeight(4)
  },
  padding: {
    padding: normalizeHeight(24),
  },
  icon: {
    backgroundColor: Colors.primaryDark,
    height: normalizeHeight(40),
    width: normalizeHeight(40),
    borderRadius: normalizeHeight(20),
    marginRight: normalizeHeight(20)
  },
  profilePicture: {
    width: normalizeWidth(40),
    height: normalizeWidth(40),
    borderRadius: normalizeWidth(20),
    borderWidth: normalizeWidth(2),
    borderColor: Colors.gray,
    marginRight: Metrics.margin,
  },
  participant: {
    marginVertical: normalizeHeight(10),
    alignItems: 'center',
    width: normalizeHeight(160)
  },
  organiser: {
    width: normalizeWidth(50),
    height: normalizeWidth(50),
    borderRadius: normalizeHeight(25)
  }
})

const EventComponent = ({ onGoBack, onGoToUserPage, eventData: {
  eventImage = null,
  title,
  location,
  date,
  description,
  participants,
  organiser
}}) => {
  const renderParticipants = ({ firstName, lastName, profilePicture = null, _id }) => (
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
          {firstName}
          {' '}
          {lastName}
        </Text>
      </Row>
    </TouchableOpacity>
  )

  console.log('organiser', organiser)

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} />
      <ScrollView>
        <ImageBackground
          source={eventImage && {uri: eventImage}}
          style={styles.eventImage}
          resizeMode='contain'
        >
          <View style={styles.overlay}>
            <Text style={[bigBoldTitle, whiteText]}>
              {title}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.separator} />
        <Row style={[styles.lightGrayContainer, styles.padding, {alignItems: 'center'}]}>
          <View style={[styles.icon, center]}>
            <Ionicons size={20} name='md-map' style={{color: Colors.lightGray}} />
          </View>
          <View>
            <Text style={[button, grayText, {marginBottom: normalizeHeight(5)}]}>{location}</Text>
            <Text style={[caption, primaryDarkText]}>
              {dayjs(date).format('DD MMMM YYYY, HH:mm')}
            </Text>
          </View>
        </Row>
        <Row style={[styles.padding]}>
          <View style={[styles.icon, center]}>
            <Ionicons size={20} name='md-help' style={{color: Colors.lightGray}} />
          </View>
          <Text style={[caption, primaryDarkText, {flex: 1}]}>
            {description}
          </Text>
        </Row>
        <View style={[styles.lightGrayContainer, styles.padding]}>
          <Text style={[button, grayText, {marginBottom: normalizeHeight(5)}]}>
            People going to this event
          </Text>
          <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            bounces={false}
            keyExtractor={({_id}) => _id}
            data={participants}
            renderItem={({item}) => renderParticipants(item)}
            numColumns={2}
          />
        </View>
        {organiser && (
          <TouchableOpacity onPress={() => onGoToUserPage(organiser._id)}>
          <Row style={[styles.padding, {alignItems: 'center'}]}>
            <ProfilePicture
              imageSource={organiser.profilePicture}
              firstName={organiser.firstName}
              lastName={organiser.lastName}
              style={[styles.profilePicture, styles.organiser]}
              textStyle={button}
            />
            <View>
              <Text style={[button, grayText, {marginBottom: normalizeHeight(5)}]}>
                Organiser of this event
              </Text>
              <Text style={[caption, primaryDarkText]}>
                {organiser.firstName}
                {' '}
                {organiser.lastName}
              </Text>
            </View>
          </Row>
        </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventComponent
