import React, { Component } from 'react'
import { ChooseFeedComponent } from '.'

import { cards } from '../../../fixtures/ChooseFeedData';
import { ScreenEnum } from '../../../lib/enums';

class ChooseFeedContainer extends Component {
  constructor() {
    super();
    this.state = {
      numberOfCards: 0
    }
  }

  onCardPress = () => {
    this.setState({ numberOfCards: this.state.numberOfCards + 1 })
  }

  onSkipButtonPress = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  onCompleteFeed = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  render() {
    const { numberOfCards } = this.state

    return (
      <ChooseFeedComponent
        onCardPress={this.onCardPress}
        onSkipButtonPress={this.onSkipButtonPress}
        cards={cards}
        numberOfCards={numberOfCards}
        onCompleteFeed={this.onCompleteFeed}
      />
    )
  }
}

export default ChooseFeedContainer
