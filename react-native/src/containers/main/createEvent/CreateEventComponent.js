import React, { useState, useReducer } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native'
import dayjs from 'dayjs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ApplicationStyles, Colors, Fonts } from '../../../themes'
import { Header, TextButton, Input, Card } from '../../../components'
import { normalizeHeight } from '../../../themes/Metrics'
import styles from './styles'
import { initialState, reducer } from './reducer'
import { FlatList } from 'react-native-gesture-handler'

const { container, shadow } = ApplicationStyles
const { bigBoldTitle, button, grayText, centeredText } = Fonts.style

const CreateEventComponent = ({ onAddPhoto, onCreateEvent, photoExisting, photo, cards, cardsChosen, onCardPress }) => {
  const [eventState, dispatch] = useReducer(reducer, initialState)

  const handleCreateEvent = () => {
    onCreateEvent(eventState, () => {
      dispatch({ type: 'clear' })
    })
  }

  const onRenderCard = ({ _id, name, imageSource }) => {
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    const cardStyle = [styles.card]
    if (existingCard) cardStyle.push(styles.highlight)
    return (
      <Card
        onPress={() => onCardPress(_id)}
        title={name}
        titleStyle={[button]}
        cardStyle={cardStyle}
        containerStyle={[styles.cardContainer]}
        imageSource={imageSource}
      />
    )
  }


  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header icon={require('../../../../assets/icon.png')} text={'Create an event'} />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        enableOnAndroid={false}
      >
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
              text={eventState.showDate ? 'Save' : 'Choose Date'}
              onPress={() => dispatch({ type: 'toggleDate' })}
              style={styles.button}
            />
            {eventState.showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={180}
                value={eventState.startDate}
                mode={'date'}
                is24Hour={true}
                display="spinner"
                onChange={async (event, value) => {
                  if (value) {
                    await dispatch({ type: 'startDate', payload: value })
                  }     
                  console.log('1', value, eventState.startDate)          
                }}
              />
            )}
          </View>
          <View style={styles.padding}>
            <Text style={[styles.label, button, grayText]}>Hour</Text>
            <Text style={[button, grayText, centeredText]}>
              {dayjs(eventState.startDate).format('HH : mm')}
            </Text>
            <TextButton
              text={eventState.showTime ? 'Save' : 'Choose Hour'}
              onPress={() => dispatch({ type: 'toggleTime' })}
              style={styles.button}
            />
            {eventState.showTime && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={180}
                value={eventState.startDate}
                mode={'time'}
                is24Hour={true}
                display="spinner"
                onChange={async (event, value) => {
                  if (value) {
                    await dispatch({ type: 'startDate', payload: value })
                  }      
                  console.log('2', value, eventState.startDate)         
                }}
              />
            )}
          </View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Choose categories that your event is part of
            </Text>
            <FlatList
              contentContainerStyle={{ alignItems: 'center' }}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default CreateEventComponent
