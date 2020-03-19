import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import Card from '../../../components/card/Card'
import { ApplicationStyles, Fonts, Colors } from '../../../themes'
import styles from './styles';
import strings from '../../../lib/stringEnums';
import TextButton from '../../../components/buttons/TextButton';
import { Ionicons } from '@expo/vector-icons'

const { container, center, } = ApplicationStyles
const { bigBoldTitle } = Fonts.style

const ChooseFeedComponent = ({ onCardPress, onSkipButtonPress, cards, numberOfCards,
  onCompleteFeed, cardsChosen }) => {
  const onRenderCard = ({ id, title, imageSource }) => {
    // const existingCard = cardsChosen.find(cardId => cardId === id)
    console.log(cardsChosen)
    return (
      <Card
        onPress={() => onCardPress(id)}
        title={title}
        titleStyle={[Fonts.style.bigBoldTitle, styles.cardTitle]}
        cardStyle={styles.card}
        containerStyle={styles.container}
        imageSource={imageSource}
      />
    )
  }

  const onComplete = () => {
    if (numberOfCards < 5) {
      return 
    }

    return (
      <TouchableOpacity onPress={onCompleteFeed}>
        <Ionicons
          name={'ios-checkmark-circle-outline'}
          size={40}
          style={styles.completeFeed}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={[container, center]}>
      <Text style={[bigBoldTitle, styles.title]}>
        {strings.chooseFeedComponent}
      </Text>
      {onComplete()}
      <FlatList
        numColumns={2}
        data={cards}
        keyExtractor={({id}) => id}
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
  cardsChosen: PropTypes.instanceOf(Array)
}

ChooseFeedComponent.defaultProps = {
  cardsChosen: []
}

export default ChooseFeedComponent
