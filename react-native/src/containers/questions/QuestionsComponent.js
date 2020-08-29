import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { Header } from '../../components';
import {
  ApplicationStyles
} from '../../themes';

import styles from './styles';
import { Question, AddQuestion } from './components';

const { container } = ApplicationStyles

const reviews = [
  {
    _id: 1,
    user: {
      _id: 11,
      firstName: 'first name aisohdxoa',
      lastName: 'last name asjdba da',
      profilePic: 'https://picsum.photos/200',
      numOfReviews: 4
    },
    question: {
      date: '2020-03-20',
      rate: 4,
      title: 'some title',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  },
  {
    _id: 2,
    user: {
      _id: 21,
      firstName: 'first name 2',
      lastName: 'last name 2',
      numOfReviews: 19
    },
    question: {
      date: '2020-03-4',
      rate: 2,
      title: 'some title 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  },
  {
    _id: 3,
    user: {
      _id: 31,
      firstName: 'first name 3',
      lastName: 'last name 3',
      profilePic: 'https://picsum.photos/200',
      numOfReviews: 1
    },
    question: {
      date: '2020-03-14',
      rate: 5,
      title: 'some title 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  }
]

const QuestionsComponent = ({ onGoBack, onDeleteQuestion, onEditQuestion, userId, eventId, isUserGoingToEvent }) => {
  const renderQuestion = ({ item }) => (
    <Question
      {...item}
      onDeleteQuestion={onDeleteQuestion}
      onEditQuestion={onEditQuestion}
      personalUserId={userId}
    />
  )

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} text={'Questions'} />

      {isUserGoingToEvent ? <AddQuestion eventId={eventId} userId={userId} /> : null}

      <FlatList
        style={styles.listContainer}
        data={reviews}
        keyExtractor={({ _id }) => _id}
        renderItem={renderQuestion}
      />
    </SafeAreaView>
  );
};

export default QuestionsComponent;
