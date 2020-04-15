import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import {
  ProfilePicture,
  TextButton,
  TextCard,
  EventCard,
  Header,
  Row,
  Button,
} from '../../../components'
import { ApplicationStyles, Fonts } from '../../../themes'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'
import { BottomStackScreensEnum, ScreenEnum } from '../../../lib/enums'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'

const { container, shadow, center } = ApplicationStyles
const { bigBoldTitle, primaryDarkText, primaryPinkText, grayText, caption, button } = Fonts.style

const ProfileComponent = ({
  navigate,
  takeProfilePicture,
  editable,
  onGoBack,
  logout,
  editData,
  user,
}) => {
  const [showedList, setShowedList] = useState('onGoing')

  console.log('user', user)
  const {
    profile: { firstName, lastName, avatar },
    ownedEvents: createdEvents,
    participatingEvents: goingEvents,
    email,
    followingCategories
  } = user

  const avatarUrl = avatar ? avatar.fullPath : ''
  const totalGoingEvents = goingEvents ? goingEvents.length : 0
  const totalCreatedEvents = createdEvents ? createdEvents.length : 0
  const categoryElement = followingCategories && followingCategories.length && followingCategories[0]
  const coverUrl = categoryElement && categoryElement.photo && categoryElement.photo.fullPath

  const renderEvents = ({ _id, title, location, startDate, photo }) => {
    const eventImage = photo ? photo.fullPath : null
    return (
      <TouchableOpacity
        onPress={() => navigate(ScreenEnum.EVENT, { eventId: _id })}
        style={{ paddingHorizontal: normalizeWidth(5) }}
        key={_id}
      >
        <EventCard
          containerStyle={[styles.eventCard, shadow]}
          title={title}
          location={location && location.addressName}
          date={startDate}
          eventImage={eventImage}
          isSmall
        />
      </TouchableOpacity>
    )
  }

  const getGoingEvents = () => {
    if (totalGoingEvents) {
      return goingEvents.map(event => renderEvents(event))
    }

    return (
      <TextCard
        message={strings.noGoingEvents}
        icon={'md-search'}
        containerStyle={{ margin: normalizeWidth(5) }}
        onPress={() => navigate(BottomStackScreensEnum.SEARCH)}
      />
    )
  }

  const getCreatedEvents = () => {
    if (totalCreatedEvents) {
      return createdEvents.map(event => renderEvents(event))
    }

    return (
      <TextCard
        message={strings.noCreatedEvents}
        icon={'md-create'}
        containerStyle={{ margin: normalizeWidth(5) }}
        onPress={() => navigate(BottomStackScreensEnum.CREATE)}
      />
    )
  }

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header
        icon={editable && require('../../../../assets/icon.png')}
        text={'Profile'}
        onPress={onGoBack}
      />
      <ScrollView bounces={false}>
        <Image
          style={styles.cover}
          resizeMode="cover"
          source={coverUrl && { uri: coverUrl }}
        />
        <Row style={styles.infoContainer}>
          <Row>
            {editable ? (
              <Button onPress={takeProfilePicture}>
                <ProfilePicture
                  firstName={firstName}
                  lastName={lastName}
                  style={styles.profilePicture}
                  imageSource={avatarUrl}
                />
              </Button>
            ) : (
              <ProfilePicture
                firstName={firstName}
                lastName={lastName}
                style={styles.profilePicture}
                imageSource={avatarUrl}
              />
            )}
            <View style={{justifyContent: 'center'}}>
              <Text style={[bigBoldTitle, primaryDarkText]}>
                {firstName} {lastName}
              </Text>
              <Text style={[caption, grayText]}>
                {email}
              </Text>
            </View>
          </Row>
          {editable && (
            <Row>
              <TextButton 
                onPress={editData}
                style={[styles.smallBtn, center, shadow]}
                hasChildren
              >
                <Ionicons
                  name={'md-create'}
                  size={24}
                  style={styles.smallBtnLogo}
                />
              </TextButton>
              <TextButton
                onPress={logout}
                style={[styles.smallBtn, center, shadow]}
                hasChildren
              >
                <Ionicons
                  name={'md-log-out'}
                  size={24}
                  style={styles.smallBtnLogo}
                />
              </TextButton>
            </Row>
          )}
        </Row>
        <View style={[styles.content]}>
          <Row style={styles.buttonsRow}>
            <TextButton
              text={'Going Events'}
              textStyle={[button, grayText, showedList === 'onGoing' && primaryPinkText]}
              style={styles.eventButton}
              onPress={() => setShowedList('onGoing')}
            />
            <TextButton
              text={'Created Events'}
              textStyle={[button, grayText, showedList === 'created' && primaryPinkText]}
              style={styles.eventButton}
              onPress={() => setShowedList('created')}
            />
          </Row>
          {showedList === 'onGoing' ? getGoingEvents() : getCreatedEvents()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileComponent
