import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Card = ({ children, className }) => {
  const classes = classNames('cc-card', className);
  return <div className={classes}>{children}</div>;
};

export default Card;
