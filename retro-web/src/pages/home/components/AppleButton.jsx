import React from 'react';

import ActionButton from '../../../components/Button/ActionButton';
import apple from '../../../assets/apple-brands.svg';

const AppleButton = ({ style }) => {
  return (
    <a href="#">
      <ActionButton
        backgroundColor="#756C83"
        title="iOS"
        text="Download"
        imgSrc={apple}
        style={style}
      />
    </a>
  );
};

export default AppleButton;
