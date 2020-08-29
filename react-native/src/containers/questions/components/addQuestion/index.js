import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TextButton, Button, Row, Input } from '../../../../components';
import { Colors } from '../../../../themes';
import styles from './styles';

const AddQuestion = ({ eventId, userId }) => {
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const onResetForm = () => {
    setShowAddQuestionForm(false);
    setTitle('');
    setDescription('');
  }

  const onShowQuestionForm = () => setShowAddQuestionForm(true);

  const onCloseQuestion = () => {
    setShowAddQuestionForm(false);
    onResetForm();
  }

  const onCreateQuestion = () => {
    // create form ...

    onCloseQuestion();
  }

  return (
    <View style={styles.container}>
      {showAddQuestionForm ? (
        <View style={[{ width: '100%' }]}>
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
  );
};

export default AddQuestion;
