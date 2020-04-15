import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
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
import { LoadMoreEnum, BottomStackScreensEnum, ScreenEnum } from '../../../lib/enums'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'

const { container, shadow, center } = ApplicationStyles
const { bigBoldTitle, primaryDarkText, boldTitle, grayText, caption } = Fonts.style
const { ON_GOING_EVENTS, CREATED_EVENTS } = LoadMoreEnum

const ProfileComponent = ({
  coverUrl,
  firstName,
  lastName,
  email,
  showEvent,
  loadMore,
  goingEvents,
  totalGoingEvents,
  createdEvents,
  totalCreatedEvents,
  navigate,
  takeProfilePicture,
  avatarUrl = null,
  editable,
  onGoBack,
  logout,
  editData
}) => {

  const renderGoingEvents = ({ _id, title, location, date, eventImage }) => (
    <TouchableOpacity
      onPress={() => navigate(ScreenEnum.EVENT, { eventId: _id })}
      style={{ paddingHorizontal: normalizeWidth(5) }}
      key={_id}
    >
      <EventCard
        containerStyle={[styles.eventCard, shadow]}
        title={title}
        location={location}
        date={date}
        eventImage={eventImage}
        isSmall
      />
    </TouchableOpacity>
  )

  const renderCreatedEvents = ({ _id, title, location, date, eventImage }) => (
    <TouchableOpacity
      onPress={() => showEvent(_id)}
      style={{ paddingHorizontal: normalizeWidth(5) }}
      key={_id}
    >
      <EventCard
        containerStyle={[styles.eventCard, shadow]}
        title={title}
        location={location}
        date={date}
        eventImage={eventImage}
        isSmall
      />
    </TouchableOpacity>
  )

  const getGoingEvents = () => {
    if (totalGoingEvents) {
      return (
        <View>
          <Text style={[boldTitle, grayText, { paddingVertical: Metrics.margin }]}>
            {strings.going}
          </Text>
          {goingEvents.map(event => renderGoingEvents(event))}
          <TextButton
            style={[styles.loadMore, center, { marginBottom: Metrics.margin }]}
            onPress={() => loadMore(ON_GOING_EVENTS)}
            text={strings.loadMore}
          />
        </View>
      )
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
      return (
        <View>
          <Text style={[boldTitle, grayText, { paddingVertical: Metrics.margin }]}>
            {strings.created}
          </Text>
          {createdEvents.map(event => renderCreatedEvents(event))}
          <TextButton
            style={[styles.loadMore]}
            onPress={() => loadMore(CREATED_EVENTS)}
            text={strings.loadMore}
          />
        </View>
      )
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
      <ScrollView>
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
          {getGoingEvents()}
          {getCreatedEvents()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileComponent
