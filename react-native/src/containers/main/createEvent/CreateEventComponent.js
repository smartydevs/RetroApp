import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground,
  Platform, KeyboardAvoidingView, Modal, TouchableWithoutFeedback } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../../themes'
import { Header, TextButton, Input } from '../../../components'
import Metrics, { normalizeWidth, normalizeHeight } from '../../../themes/Metrics'
import { OS } from '../../../lib/enums'
import dayjs from 'dayjs';

const {container, center} = ApplicationStyles
const {bigBoldTitle, button, grayText, centeredText} = Fonts.style

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  image: {
    flex: 1,
    height: normalizeHeight(200),
    zIndex: 500,
    backgroundColor: Colors.white
  },
  overlay: {
    flex: 1,
    backgroundColor: `${Colors.primaryDark}80`,
    padding: normalizeWidth(24)
  },
  separator: {
    width: '100%',
    borderBottomColor: Colors.gray,
    borderBottomWidth: normalizeHeight(4),
    zIndex: 500
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
  },
  descriptionInput: {
    height: normalizeHeight(180),
  },
  label: {
    marginBottom: normalizeHeight(10)
  },
  button: {
    backgroundColor: Colors.primaryPink,
    marginTop: normalizeHeight(20)
  }
})

const CreateEventComponent = ({onAddPhoto, onCreateEvent, photoExisting}) => {
  const dt = new Date()
  dt.setHours( dt.getHours() + 2 )
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
        <ScrollView bounces={false}>
          <ImageBackground
            source={{uri: 'https://picsum.photos/1920/1080'}}
            style={styles.image}
            resizeMode='contain'
          >
            <View style={styles.overlay}>
              {!photoExisting && (
                <TextButton
                  text="Add a photo"
                  style={{flex: 1}}
                  textStyle={[bigBoldTitle, grayText]}
                  onPress={onAddPhoto}
                />
              )}
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
                style={styles.button}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateEventComponent
