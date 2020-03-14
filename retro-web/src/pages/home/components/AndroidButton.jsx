import React from 'react';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

import { ActionButton } from '../../../components';

const AndroidButton = () => {
  return (
    <a href="#">
      <ActionButton
        backgroundColor="#F38181"
        title="Android"
        text="Download"
        icon={faIcons}
        size={'2x'}
        iconStyle={{
          color: '#fbfbfb'
        }}
      />
    </a>
  );
};

export default AndroidButton;
