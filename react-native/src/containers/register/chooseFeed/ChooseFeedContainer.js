import React, { Component } from 'react'
import { ChooseFeedComponent } from '.'

import { cards } from '../../../fixtures/ChooseFeedData';
import { ScreenEnum } from '../../../lib/enums';

class ChooseFeedContainer extends Component {
  constructor() {
    super();
    this.state = {
      numberOfCards: 0,
      cardsChosen: []
    }
  }

  onCardPress = (id) => {
    const { cardsChosen } = this.state
    // const existingCard = cardsChosen.filter(cardId => cardId === id)
    // console.log('existingCard', existingCard)

    // let newCardsChosen = []

    // if (existingCard.length) {
    //   newCardsChosen = cardsChosen.filter(cardId => cardId !== id)
    //   console.log('newCardsChosen 1', newCardsChosen)
    // } else {
    //   newCardsChosen = cardsChosen.push(id)
    //   console.log('newCardsChosen 2', newCardsChosen)
    // }

    // this.setState({
    //   numberOfCards: this.state.numberOfCards + 1,
    //   cardsChosen: newCardsChosen 
    // }, () => {
    //   console.log('state', this.state)
    // })

    this.setState({
      numberOfCards: this.state.numberOfCards + 1,
      // cardsChosen: this.state.cardsChosen.push(id) 
    }, () => {
      console.log('state', this.state)
    })
  }

  onSkipButtonPress = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  onCompleteFeed = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  render() {
    const { numberOfCards, cardsChosen } = this.state

    return (
      <ChooseFeedComponent
        onCardPress={this.onCardPress}
        onSkipButtonPress={this.onSkipButtonPress}
        cards={cards}
        numberOfCards={numberOfCards}
        cardsChosen={cardsChosen}
        onCompleteFeed={this.onCompleteFeed}
      />
    )
  }
}

export default ChooseFeedContainer
