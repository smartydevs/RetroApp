import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { QuestionsComponent } from '.';
import Constants from '../../lib/enums';

class QuestionsContainer extends Component {
  state = {
    userId: ''
  }

  componentDidMount() {
    AsyncStorage.getItem(Constants.USER_ID).then(userId => {
      this.setState({ userId })
    })
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  onDeleteQuestion = questionId => console.log(questionId);

  onEditQuestion = questionId => console.log(questionId);

  render() {
    const { userId } = this.state;
    const { eventId, isUserGoingToEvent } = this.props.navigation.state.params;

    return (
      <QuestionsComponent
        onGoBack={this.onGoBack}
        onDeleteQuestion={this.onDeleteQuestion}
        onEditQuestion={this.onEditQuestion}
        userId={userId}
        eventId={eventId}
        isUserGoingToEvent={isUserGoingToEvent}
      />
    )
  }
}

export default QuestionsContainer;
