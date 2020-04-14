import React, { useState, useReducer } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import dayjs from 'dayjs'

import { ApplicationStyles, Colors, Fonts } from '../../../themes'
import { Header, TextButton, Input, Card } from '../../../components'
import { normalizeHeight } from '../../../themes/Metrics'
import { OS } from '../../../lib/enums'
import styles from './styles'
import { initialState, reducer } from './reducer'
import { FlatList } from 'react-native-gesture-handler'

const { container } = ApplicationStyles
const { bigBoldTitle, button, grayText, centeredText, whiteText } = Fonts.style

const CreateEventComponent = ({ onAddPhoto, onCreateEvent, photoExisting, photo, cards, cardsChosen, onCardPress }) => {
  const dt = new Date()
  dt.setHours(dt.getHours() + 2)
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [eventState, dispatch] = useReducer(reducer, initialState)

  const toggleDatePicker = () => {
    setShowDate(!showDate)
  }

  const toggleTimePicker = () => {
    setShowTime(!showTime)
  }

  const handleCreateEvent = () => {
    onCreateEvent(eventState)
  }

  const onRenderCard = ({ _id, name, imageSource }) => {
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    const cardStyle = [styles.card]
    if (existingCard) cardStyle.push(styles.highlight)
    return (
      <Card
        onPress={() => onCardPress(_id)}
        title={name}
        titleStyle={[button, whiteText, styles.cardTitle]}
        cardStyle={cardStyle}
        containerStyle={styles.cardContainer}
        imageSource={imageSource}
      />
    )
  }


  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header icon={require('../../../../assets/icon.png')} text={'Create an event'} />
      <ScrollView bounces={false}>
        <ImageBackground
          source={{ uri: photoExisting ? photo.uri : '' }}
          style={styles.image}
          resizeMode="contain"
        >
          <View style={styles.overlay}>
            <TextButton
              text="Add a photo"
              style={{ flex: 1 }}
              textStyle={[bigBoldTitle]}
              onPress={onAddPhoto}
            />
          </View>
        </ImageBackground>
        <View style={styles.separator} />
        <KeyboardAvoidingView
          behavior={OS.IOS === Platform.OS ? 'padding' : 'height'}
          style={styles.container}
          enabled
        >
          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>Name</Text>
            <Input
              onChangeText={value => dispatch({ type: 'title', payload: value })}
              value={eventState.title}
            />
          </View>
          <View style={styles.padding}>
            <Text style={[styles.label, button, grayText]}>Location</Text>
            <Input
              onChangeText={value => dispatch({ type: 'location', payload: value })}
              value={eventState.location}
            />
          </View>
          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>Date</Text>
            <Text style={[button, grayText, centeredText]}>
              {dayjs(eventState.startDate).format('DD MMMM YYYY')}
            </Text>
            <TextButton
              text={showDate ? 'Save' : 'Choose Date'}
              onPress={toggleDatePicker}
              style={styles.button}
            />
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={180}
                value={eventState.startDate}
                mode={'date'}
                is24Hour={true}
                display="spinner"
                onChange={(event, value) =>
                  dispatch({ type: 'startDate', payload: value })
                }
              />
            )}
          </View>
          <View style={styles.padding}>
            <Text style={[styles.label, button, grayText]}>Hour</Text>
            <Text style={[button, grayText, centeredText]}>
              {dayjs(eventState.startDate).format('HH : mm')}
            </Text>
            <TextButton
              text={showTime ? 'Save' : 'Choose Hour'}
              onPress={toggleTimePicker}
              style={styles.button}
            />
            {showTime && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={180}
                value={eventState.startDate}
                mode={'time'}
                is24Hour={true}
                display="spinner"
                onChange={(event, value) =>
                  dispatch({ type: 'startDate', payload: value })
                }
              />
            )}
          </View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Choose categories that your event is part of
            </Text>
            <FlatList
              numColumns={2}
              data={cards}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => onRenderCard(item)}
            />
          </View>

          <View style={[styles.padding]}>
            <Text style={[styles.label, button, grayText]}>Description</Text>
            <Input
              multiline
              containerStyle={styles.descriptionInput}
              textStyle={{ height: normalizeHeight(160) }}
              onChangeText={value => dispatch({ type: 'description', payload: value })}
              value={eventState.description}
            />
          </View>
          <View style={[styles.padding, styles.lightGrayContainer]}>
            <TextButton
              text={'Create Event'}
              onPress={handleCreateEvent}
              style={styles.createEventButton}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateEventComponent
