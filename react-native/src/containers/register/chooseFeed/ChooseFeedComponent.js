import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import Card from '../../../components/card/Card'
import { ApplicationStyles, Fonts, Colors } from '../../../themes'
import styles from './styles'
import strings from '../../../lib/stringEnums'
import { TextButton } from '../../../components'
import { Ionicons } from '@expo/vector-icons'

const { container, center } = ApplicationStyles
const { bigBoldTitle, button, whiteText, centeredText } = Fonts.style

const ChooseFeedComponent = ({
  onCardPress,
  onSkipButtonPress,
  cards,
  numberOfCards,
  onCompleteFeed,
  cardsChosen,
}) => {
  const onRenderCard = ({ _id, name, imageSource }) => {
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    const cardStyle = [styles.card]
    if (existingCard) cardStyle.push(styles.highlight)
    return (
      <Card
        onPress={() => onCardPress(_id)}
        title={name}
        titleStyle={[bigBoldTitle, whiteText, centeredText]}
        cardStyle={cardStyle}
        containerStyle={styles.container}
        imageSource={imageSource}
      />
    )
  }

  const onComplete = () => {
    if (numberOfCards < 1) {
      return
    }

    return (
      <TextButton
        onPress={onCompleteFeed}
        style={[styles.saveButton, center]}
        hasChildren
      >
        <Ionicons
          name={'md-checkmark-circle-outline'}
          size={24}
          style={styles.saveLogo}
        />
        <Text style={[button]}>{strings.save}</Text>
      </TextButton>
    )
  }

  return (
    <View style={[container, center]}>
      <Text style={[bigBoldTitle, styles.title]}>{strings.chooseFeedComponent}</Text>
      {onComplete()}
      <FlatList
        numColumns={2}
        data={cards}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => onRenderCard(item)}
      />
      <TextButton
        onPress={onSkipButtonPress}
        style={styles.skipButton}
        textStyle={styles.skipText}
        text={strings.skip}
      />
    </View>
  )
}

ChooseFeedComponent.propTypes = {
  onCardPress: PropTypes.func.isRequired,
  onSkipButtonPress: PropTypes.func.isRequired,
  cards: PropTypes.instanceOf(Array).isRequired,
  numberOfCards: PropTypes.number.isRequired,
  onCompleteFeed: PropTypes.func.isRequired,
  cardsChosen: PropTypes.instanceOf(Array),
}

ChooseFeedComponent.defaultProps = {
  cardsChosen: [],
}

export default ChooseFeedComponent
