import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Row, ProfilePicture } from '../../../../components';
import { normalizeHeight, normalizeWidth } from '../../../../themes/Metrics';
import { ApplicationStyles, Fonts, Colors } from '../../../../themes';
import styles from './styles';

const { center, shadow } = ApplicationStyles
const { smallCaption, caption, button } = Fonts.style

const Review = ({ _id, user = {}, review = {} }) => {
  const { firstName, lastName, profilePic, numOfReviews } = user;
  const { rate, title, description, date } = review;

  const renderStars = (rate) => {
    const stars = [];
    const emptyStart = 5 - rate;

    for (let i = 0; i < rate; i++) {
      stars.push (
        <Ionicons
          key={i}
          name="md-star"
          size={20}
          style={{color: Colors.primaryPink}}
        />
      )
    }

    for (let i = 0; i < emptyStart; i++) {
      stars.push (
        <Ionicons
          key={i + rate}
          name="md-star-outline"
          size={20}
          style={{color: Colors.primaryPink}}
        />
      )
    }

    return stars;
  }

  return (
    <Row style={[styles.container, styles.lightGrayContainer, shadow]}>
      <View style={center}>
        <ProfilePicture
          firstName={firstName}
          lastName={lastName}
          imageSource={profilePic}
          style={styles.profilePicture}
        />
        <View style={[center, { marginTop: normalizeHeight(10), maxWidth: normalizeWidth(60)}]}>
          <Text style={smallCaption}>{firstName}</Text>
          <Text style={[smallCaption, { marginTop: normalizeHeight(5) }]}>{lastName}</Text>
          <Text style={[smallCaption, { marginTop: normalizeHeight(20) }]}>
            Reviews: {numOfReviews}
          </Text>          
        </View>
      </View>

      <View style={[styles.content]}>
        <Row>{renderStars(rate)}</Row>
        <Text style={[styles.title, button]}>{title}</Text>
        <Text style={[styles.description, caption]}>{description}</Text>
      </View>
    </Row>
  )
}

export default Review;
