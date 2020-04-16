import React, { Component } from 'react'
import { ChooseFeedComponent } from '.'

import { ScreenEnum } from '../../../lib/enums'
import { getCategories, addMemberCategories } from '../../../api'
import { Notification } from '../../../components'
import strings from '../../../lib/stringEnums'
import { BackHandler } from 'react-native'

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
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => this.props.navigation.goBack()

  async getCategories() {
    getCategories().then(({ data, isOk }) => {
      if (isOk) {
        const { getCategories = [] } = data
        const categories = getCategories.map(cat => {
          return {
            _id: cat._id,
            name: cat.name,
            imageSource: cat.photo.fullPath,
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
    const { cardsChosen, numberOfCards } = this.state
    const existingCard = cardsChosen.find(cardId => cardId === _id)
    let newCardsChosen = []
    let newNumberOfCards = numberOfCards

    if (existingCard) {
      newCardsChosen = cardsChosen.filter(cardId => cardId !== _id)
      newNumberOfCards--
    } else {
      newCardsChosen = [...cardsChosen, _id]
      newNumberOfCards++
    }

    this.setState({
      numberOfCards: newNumberOfCards,
      cardsChosen: newCardsChosen,
    })
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
