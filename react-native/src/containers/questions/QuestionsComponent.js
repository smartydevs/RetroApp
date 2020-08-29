import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

import { Header } from '../../components'
import { ApplicationStyles } from '../../themes'

import styles from './styles'
import { Question, AddQuestion } from './components'

const { container } = ApplicationStyles

const QuestionsComponent = ({
  onGoBack,
  onDeleteQuestion,
  onEditQuestion,
  userId,
  eventId,
  questions,
  isUserGoingToEvent,
  refetchQuestions,
}) => {
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

      {isUserGoingToEvent ? (
        <AddQuestion
          refetchQuestions={refetchQuestions}
          eventId={eventId}
          userId={userId}
        />
      ) : null}

      <FlatList
        style={styles.listContainer}
        data={questions}
        keyExtractor={({ _id }) => _id}
        renderItem={renderQuestion}
      />
    </SafeAreaView>
  )
}

export default QuestionsComponent
