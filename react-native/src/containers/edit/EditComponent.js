import React, { useReducer } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FlatList } from 'react-native-gesture-handler'

import { ApplicationStyles, Fonts } from '../../themes'
import { Header, Input, Card, TextButton } from '../../components'
import styles from './styles'
import { reducer } from './reducer'

const { center, shadow, container } = ApplicationStyles
const { boldTitle, grayText, button } = Fonts.style

const EditComponent = ({ onGoBack, user, onCardPress, onPressSave }) => {
  const [eventState, dispatch] = useReducer(reducer, user)

  const onRenderCard = ({ _id, name, imageSource, isSelected }) => {
    const cardStyle = [styles.card]
    if (isSelected) cardStyle.push(styles.highlight)

    return (
      <Card
        onPress={() => onCardPress(_id)}
        title={name}
        titleStyle={[button]}
        cardStyle={cardStyle}
        containerStyle={[styles.cardContainer, shadow]}
        imageSource={imageSource}
      />
    )
  }

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        enableOnAndroid={false}
        bounces={false}
      >
        <Text style={[boldTitle, grayText, styles.title]}>
          Edit your info 
        </Text>
        <View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Email
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'email', payload: value })}
              value={eventState.email}
            />
          </View>

          <View style={[styles.padding]}>
            <Text style={[styles.label, button, grayText]}>
              First Name
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'firstName', payload: value })}
              value={eventState.firstName}
            />
          </View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <Text style={[styles.label, button, grayText]}>
              Last Name
            </Text>
            <Input
              onChangeText={value => dispatch({ type: 'lastName', payload: value })}
              value={eventState.lastName}
            />
          </View>

          <View style={[styles.padding]}>
            <Text style={[styles.label, button, grayText]}>
              Liked Categories
            </Text>
            <FlatList
              contentContainerStyle={{ alignItems: 'center' }}
              numColumns={2}
              data={user.categories}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => onRenderCard(item)}
            />
          </View>

          <View style={[styles.padding, styles.lightGrayContainer]}>
            <TextButton
              text={'Save'}
              onPress={onPressSave}
              style={styles.saveButton}
            />
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default EditComponent
