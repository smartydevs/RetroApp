import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { Header, Row, ProfilePicture } from '../../components';
import { ApplicationStyles, Fonts } from '../../themes';

import styles from './styles';
import { normalizeHeight } from '../../themes/Metrics';
import { Review } from './components';

const { container, center, shadow } = ApplicationStyles
const { smallCaption, caption } = Fonts.style

const reviews = [
  {
    _id: 1,
    user: {
      firstName: 'first name aisohdxoa',
      lastName: 'last name asjdba da',
      profilePic: 'https://picsum.photos/200',
      numOfReviews: 4
    },
    review: {
      date: '',
      rate: 4,
      title: 'some title',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  },
  {
    _id: 2,
    user: {
      date: '',
      firstName: 'first name 2',
      lastName: 'last name 2',
      numOfReviews: 19
    },
    review: {
      date: '',
      rate: 2,
      title: 'some title 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  },
  {
    _id: 3,
    user: {
      firstName: 'first name 3',
      lastName: 'last name 3',
      profilePic: 'https://picsum.photos/200',
      numOfReviews: 1
    },
    review: {
      rate: 5,
      title: 'some title 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  }
]

const ReviewsComponent = ({ onGoBack }) => {
  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} text={'Reviews'} />

      <View>
        <Text> Add review section </Text>
      </View>

      <FlatList
        style={styles.listContainer}
        data={reviews}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => <Review {...item} />}
      />
    </SafeAreaView>
  );
};

export default ReviewsComponent;
