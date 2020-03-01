import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { androi } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const ActionButton = ({ backgroundColor, imgSrc, title, text, style = {} }) => {
  return (
    <div
      className="cc-actionButton"
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <img
        alt="Button Image"
        src={imgSrc}
        style={{
          fill: 'white',
        }}
      />
      <div className="cc-actionButton--card">
        <p className="dark-text">{title}</p>
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
