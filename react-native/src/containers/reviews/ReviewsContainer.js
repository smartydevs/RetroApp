import React, { Component } from 'react';
import { ReviewsComponent } from '.';

class ReviewsContainer extends Component {
  onGoBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { eventId } = this.props.navigation.state.params;

    return (
      <ReviewsComponent
        onGoBack={this.onGoBack}
      />
    )
  }
}

export default ReviewsContainer;
