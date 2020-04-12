import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, SafeAreaView, ScrollView, ImageBackground,
  Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import dayjs from 'dayjs'

import { ApplicationStyles, Fonts } from '../../../themes'
import { Header, TextButton, Input } from '../../../components'
import { normalizeHeight } from '../../../themes/Metrics'
import { OS } from '../../../lib/enums'
import styles from './styles'

const {container, shadow} = ApplicationStyles
const {bigBoldTitle, button, grayText, centeredText} = Fonts.style

const CreateEventComponent = ({onAddPhoto, onCreateEvent, photoExisting, photo}) => {
  const dt = new Date()
  // dt.setHours( dt.getHours() + 2 )
  const [date, setDate] = useState(dt)
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
  }

  const toggleDatePicker = () => {
    setShowDate(!showDate)
  }

  const toggleTimePicker = () => {
    setShowTime(!showTime)
  }

  return (
    <SafeAreaView style={[container, styles.container]}>
        <Header
          icon={require("../../../../assets/icon.png")}
          text={'Create an event'}
        />
        <ScrollView bounces={false} onPress={Keyboard.dismiss}>
          <ImageBackground
            source={photoExisting && photo}
            style={styles.image}
            resizeMode='contain'
          >
            <View style={styles.overlay}>
              <TextButton
                text="Add a photo"
                style={{flex: 1}}
                textStyle={[bigBoldTitle, shadow]}
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
              <Text style={[styles.label, button, grayText]}>
                Name 
              </Text>
              <Input />
            </View>
            <View style={styles.padding}>
              <Text style={[styles.label, button, grayText]}>
                Location 
              </Text>
              <Input />
            </View>
            <View style={[styles.padding, styles.lightGrayContainer]}>
              <Text style={[styles.label, button, grayText]}>
                Date 
              </Text>
              <Text style={[button, grayText, centeredText]}>
                {dayjs(date).format('DD MMMM YYYY')}
              </Text>
              <TextButton
                text={showDate ? 'Save' : 'Choose Date'}
                onPress={toggleDatePicker}
                style={styles.button}
              />
              {showDate &&
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChange}
                />
              }
            </View>
            <View style={styles.padding}>
              <Text style={[styles.label, button, grayText]}>
                Hour 
              </Text>
              <Text style={[button, grayText, centeredText]}>
                {dayjs(date).format('HH : mm')}
              </Text>
              <TextButton
                text={showTime ? 'Save' : 'Choose Hour'}
                onPress={toggleTimePicker} 
                style={styles.button}
              />
              {showTime &&
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode={'time'}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChange}
                />
              }
            </View>
            <View style={[styles.padding, styles.lightGrayContainer]}>
              <Text style={[styles.label, button, grayText]}>
                Description 
              </Text>
              <Input
                multiline
                containerStyle={styles.descriptionInput}
                textStyle={{height: normalizeHeight(160)}}
              />
            </View>
            <View style={[styles.padding]}>
              <TextButton
                text={'Create Event'}
                onPress={onCreateEvent} 
                style={styles.createEventButton}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateEventComponent
