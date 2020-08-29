import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TextButton, Button, Row, Input, Notification } from '../../../../components';
import { Colors } from '../../../../themes';
import { addReview } from '../../../../api';
import strings from '../../../../lib/stringEnums';

import styles from './styles';

const AddReview = ({ eventId, getReviews }) => {
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [starsAdded, setStarsAdded] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressStar = (stars) => setStarsAdded(stars + 1)

  const onResetForm = () => {
    setShowAddReviewForm(false);
    setStarsAdded(0);
    setTitle('');
    setDescription('');
  }

  const onShowReviewForm = () => setShowAddReviewForm(true);

  const onCloseReview = () => {
    setShowAddReviewForm(false);
    onResetForm();
  }

  const onCreateReview = async () => {
    setLoading(true);

    const input = { eventId, stars: starsAdded, title, description };

    const { isOk } = await addReview(input)

    if (isOk) {
      onCloseReview();
      await getReviews();
    } else {
      Notification.error(strings.error)
    }

    setLoading(false);
  }

  const renderStars = () => {
    const stars = [];
    const emptyStart = 5 - starsAdded;

    const defaultStarProps = {
      size: 40,
      style: styles.star
    }

    for (let i = 0; i < starsAdded; i++) {
      stars.push(
        <Button key={i} onPress={() => onPressStar(i)}>
          <Ionicons name="md-star" {...defaultStarProps} />
        </Button>
      )
    }

    for (let i = 0; i < emptyStart; i++) {
      stars.push(
        <Button key={i + starsAdded} onPress={() => onPressStar(i + starsAdded)}>
          <Ionicons name="md-star-outline" {...defaultStarProps} />
        </Button>
      )
    }

    return stars;
  }

  return (
    <View style={styles.container}>
      {showAddReviewForm ? (
        <View style={[{ width: '100%' }]}>
          <Row style={styles.starsContainer}>{renderStars()}</Row>
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={'Add a title'}
            onChangeText={title => setTitle(title)}
            value={title}
          />
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={'Add impressions of the event'}
            onChangeText={description => setDescription(description)}
            value={description}
            multiline
          />
        </View>
      ) : null}
      <TextButton
        text={'Add Review'}
        style={styles.addReviewBtn}
        onPress={showAddReviewForm ? onCreateReview : onShowReviewForm}
        isLoading={loading}
      />
      {showAddReviewForm ? (
        <TextButton
          text={'Cancel Review'}
          style={{ backgroundColor: Colors.red }}
          onPress={onCloseReview}
        />
      ) : null}
    </View>
  );
};

export default AddReview;
