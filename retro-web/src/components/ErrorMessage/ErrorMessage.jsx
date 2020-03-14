import React from 'react';
import { ErrorMessage as $ErrorMessage } from 'formik';

import './style.scss';

const ErrorMessage = ({ name }) => {
  return (
    <$ErrorMessage name={name}>
      {message => (
        <div>
          <p className="cc-errorMessage">{message}</p>
        </div>
      )}
    </$ErrorMessage>
  );
};

export default ErrorMessage;
