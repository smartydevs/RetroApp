import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../../components';
import { ApplicationStyles } from '../../themes';

import styles from './styles';

const { container } = ApplicationStyles

const ReviewsComponent = ({ onGoBack }) => {
  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header onPress={onGoBack} text={'Reviews'} />
    </SafeAreaView>
  );
};

export default ReviewsComponent;
