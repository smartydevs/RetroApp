import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { ReviewsComponent } from '.';
import Constants from '../../lib/enums';
import { editReview, deleteReview } from '../../api';
import { Notification } from '../../components';
import strings from '../../lib/stringEnums';

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

  onDeleteReview = async reviewId => {
    const { data, isOk } = await deleteReview(reviewId);

    if (isOk) {
      Notification.show('Review removed successfully');
    } else {
      Notification.error(strings.error);
    }
  };

  render() {
    const { userId } = this.state;
    const { eventId, isUserGoingToEvent, reviews } = this.props.navigation.state.params;

    return (
      <ReviewsComponent
        onGoBack={this.onGoBack}
        onDeleteReview={this.onDeleteReview}
        userId={userId}
        eventId={eventId}
        isUserGoingToEvent={isUserGoingToEvent}
        reviews={reviews}
      />
    )
  }
}

export default ReviewsContainer;
