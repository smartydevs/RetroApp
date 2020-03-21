import React, { Component } from 'react'
import { ChooseFeedComponent } from '.'

import { cards } from '../../../fixtures/ChooseFeedData'
import { ScreenEnum } from '../../../lib/enums'
import { getCategories, addMemberCategories } from '../../../api'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'

class ChooseFeedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfCards: 0,
      cardsChosen: [],
      categoriesCards: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getCategories()
  }

  async getCategories() {
    getCategories().then(({ data, isOk }) => {
      if (isOk) {
        const { getCategories = [] } = data
        const categories = getCategories.map(cat => {
          return {
            _id: cat._id,
            name: cat.name,
            imageSource: 'https://picsum.photos/1920/1080',
          }
        })
        this.setState({
          isLoading: false,
          categoriesCards: categories,
        })
      } else {
        this.setState({ isLoading: false })
        return Notification.error(strings.error)
      }
    })
  }

  onCardPress = _id => {
    const { cardsChosen } = this.state
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    let newCardsChosen = []

    if (existingCard) {
      newCardsChosen = cardsChosen.filter(cardId => cardId !== _id)
    } else {
      newCardsChosen = [...cardsChosen, _id]
    }

    this.setState(prevState => ({
      numberOfCards: prevState + 1,
      cardsChosen: newCardsChosen,
    }))
  }

  onSkipButtonPress = () => {
    this.props.navigation.push(ScreenEnum.MAIN)
  }

  onCompleteFeed = () => {
    const { cardsChosen } = this.state
    const { email } = this.props.navigation.state.params

    if (cardsChosen.length < 1) {
      return Notification.error('Select at least one category')
    }

    addMemberCategories({ email, categories: cardsChosen }).then(({ isOk }) => {
      if (isOk) {
        this.props.navigation.push(ScreenEnum.MAIN)
      } else {
        return Notification.error(strings.error)
      }
    })
  }

  render() {
    const { numberOfCards, cardsChosen, categoriesCards } = this.state

    return (
      <ChooseFeedComponent
        onCardPress={this.onCardPress}
        onSkipButtonPress={this.onSkipButtonPress}
        cards={categoriesCards}
        numberOfCards={numberOfCards}
        cardsChosen={cardsChosen}
        onCompleteFeed={this.onCompleteFeed}
      />
    )
  }
}

export default ChooseFeedContainer
