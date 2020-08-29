import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { ReviewsComponent } from '.';
import Constants from '../../lib/enums';

class ReviewsContainer extends Component {
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

  onDeleteReview = reviewId => console.log(reviewId);

  onEditReview = reviewId => console.log(reviewId);

  render() {
    const { userId } = this.state;
    const { eventId, isUserGoingToEvent } = this.props.navigation.state.params;

    return (
      <ReviewsComponent
        onGoBack={this.onGoBack}
        onDeleteReview={this.onDeleteReview}
        onEditReview={this.onEditReview}
        userId={userId}
        eventId={eventId}
        isUserGoingToEvent={isUserGoingToEvent}
      />
    )
  }
}

export default ReviewsContainer;
