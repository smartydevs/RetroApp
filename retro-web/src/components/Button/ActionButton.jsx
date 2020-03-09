import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const ActionButton = ({ backgroundColor, icon, title, text, style = {}, iconStyle = {}, size }) => {
  return (
    <div
      className="cc-actionButton"
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <FontAwesomeIcon icon={icon} style={iconStyle} size={size} />
      <div className="cc-actionButton--card">
        <p className="dark-text">
          <b>
            {title}
          </b>
        </p>
        <p
          style={{
            color: '#4B4554',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ActionButton;
