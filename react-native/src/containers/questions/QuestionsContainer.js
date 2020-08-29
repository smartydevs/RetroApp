import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { QuestionsComponent } from '.'
import Constants from '../../lib/enums'
import { getQuestions as fetchQuestions } from '../../api/main/question'

class QuestionsContainer extends Component {
  state = {
    questions: [],
  }

  componentDidMount() {
    this.getQuestions()
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  getQuestions = () => {
    const { eventId } = this.props.navigation.state.params
    fetchQuestions(eventId).then(({ isOk, data }) => {
      if (isOk) {
        this.setState({ questions: data.getQuestions })
      }
    })
  }

  onDeleteQuestion = questionId => console.log(questionId)

  onEditQuestion = questionId => console.log(questionId)

  render() {
    const { userId, questions } = this.state
    const { eventId, isUserGoingToEvent } = this.props.navigation.state.params

    return (
      <QuestionsComponent
        onGoBack={this.onGoBack}
        onDeleteQuestion={this.onDeleteQuestion}
        onEditQuestion={this.onEditQuestion}
        userId={userId}
        eventId={eventId}
        questions={questions}
        refetchQuestions={this.getQuestions}
        isUserGoingToEvent={isUserGoingToEvent}
      />
    )
  }
}

export default QuestionsContainer
