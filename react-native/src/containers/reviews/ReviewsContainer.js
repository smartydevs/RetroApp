import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { ReviewsComponent } from '.';
import Constants from '../../lib/enums';
import { editReview, deleteReview, getReviews } from '../../api';
import { Notification } from '../../components';
import strings from '../../lib/stringEnums';

class ReviewsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this)
  }

  async componentDidMount() {
    const { eventId } = this.props.navigation.state.params;

    AsyncStorage.getItem(Constants.USER_ID).then(userId => {
      this.setState({ userId })
    })

    const { data, isOk } = await getReviews(eventId)

    if (isOk) {
      this.setState({ reviews: data.getReviews })
    } else {
      Notification.error(strings.error)
    }
  }

  getReviews = () => {
    const { eventId } = this.props.navigation.state.params;

    getReviews(eventId).then(({ data, isOk }) => {
      if (isOk) {
        this.setState({ reviews: data.getReviews })
      } else {
        return Notification.error(strings.error)
      }
    })
  }

  onGoBack = () => {
    this.props.navigation.goBack()
  }

  onDeleteReview = async reviewId => {
    const { data, isOk } = await deleteReview(reviewId);

    if (isOk) {
      Notification.show('Review removed successfully');
      this.getReviews();
    } else {
      Notification.error(strings.error);
    }
  };

  render() {
    const { userId, reviews } = this.state;
    const { eventId, isUserGoingToEvent } = this.props.navigation.state.params;

    return (
      <ReviewsComponent
        onGoBack={this.onGoBack}
        onDeleteReview={this.onDeleteReview}
        userId={userId}
        eventId={eventId}
        isUserGoingToEvent={isUserGoingToEvent}
        reviews={reviews}
        getReviews={this.getReviews}
      />
    )
  }
}

export default ReviewsContainer;
