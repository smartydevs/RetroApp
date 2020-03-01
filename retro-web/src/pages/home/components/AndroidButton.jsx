import React from 'react';

import { ActionButton } from '../../../components';

import android from '../../../assets/android-brands.svg';

const AndroidButton = () => {
  return (
    <a href="#">
      <ActionButton
        backgroundColor="#F38181"
        title="Android"
        text="Download"
        imgSrc={android}
      />
    </a>
  );
};

export default AndroidButton;
