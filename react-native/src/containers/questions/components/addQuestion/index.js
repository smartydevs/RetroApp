import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { TextButton, Button, Row, Input, Notification } from '../../../../components'
import { Colors } from '../../../../themes'
import styles from './styles'
import { createQuestion } from '../../../../api/main/question'

const AddQuestion = ({ eventId, userId, refetchQuestions }) => {
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false)
  const [question, setQuestion] = useState('')

  const onResetForm = () => {
    setShowAddQuestionForm(false)
    setQuestion('')
  }

  const onShowQuestionForm = () => setShowAddQuestionForm(true)

  const onCloseQuestion = () => {
    setShowAddQuestionForm(false)
    onResetForm()
  }

  const onCreateQuestion = async () => {
    const { isOk, data } = await createQuestion({ eventId, text: question })
    if (isOk) {
      refetchQuestions()
      onCloseQuestion()
    } else {
      return Notification.error(
        'Something went wrong while uploading the data. Please Try again'
      )
    }
  }

  return (
    <View style={styles.container}>
      {showAddQuestionForm ? (
        <View style={[{ width: '100%' }]}>
          <Input
            containerStyle={[styles.inputContainer]}
            placeholder={'Ask a question'}
            onChangeText={question => setQuestion(question)}
            value={question}
          />
        </View>
      ) : null}
      <TextButton
        text={'Add Question'}
        style={styles.addQuestionBtn}
        onPress={showAddQuestionForm ? onCreateQuestion : onShowQuestionForm}
      />
      {showAddQuestionForm ? (
        <TextButton
          text={'Cancel Question'}
          style={{ backgroundColor: Colors.red }}
          onPress={onCloseQuestion}
        />
      ) : null}
    </View>
  )
}

export default AddQuestion
