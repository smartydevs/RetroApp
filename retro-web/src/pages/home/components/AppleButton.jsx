import React from 'react';

import ActionButton from '../../../components/Button/ActionButton';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

const AppleButton = ({ style }) => {
  return (
    <a href="#">
      <ActionButton
        backgroundColor="#756C83"
        title="iOS"
        text="Download"
        icon={faAppleAlt}
        size={'2x'}
        iconStyle={{
          color: '#0c0b0e'
        }}
      />
    </a>
  );
};

export default AppleButton;
