import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { Header } from '../../components';
import { ApplicationStyles } from '../../themes';

import styles from './styles';
import { Review, AddReview } from './components';

const { container } = ApplicationStyles

const ReviewsComponent = ({
  onGoBack,
  onDeleteReview,
  userId,
  eventId,
  isUserGoingToEvent,
  reviews
}) => {
  const renderReview = ({ item }) => (
      <Review
        {...item}
        onDeleteReview={onDeleteReview}
        personalUserId={userId}
      />
    )

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} text={'Reviews'} />

      {isUserGoingToEvent ? <AddReview eventId={eventId} /> : null}

      <FlatList
        style={styles.listContainer}
        data={reviews}
        keyExtractor={({ _id }) => _id}
        renderItem={renderReview}
      />
    </SafeAreaView>
  );
};

export default ReviewsComponent;
