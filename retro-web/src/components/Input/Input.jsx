import React from 'react';
import { Field } from 'formik';

import { ErrorMessage } from '../index';
import './style.scss';

const Input = ({ name, type, labelText = null, placeholder = null }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <div className="cc-input--container">
            <label htmlFor={name}>{labelText || name}</label>
            <input
              type={type}
              placeholder={placeholder}
              className="cc-input_input"
              {...field}
            />
            <ErrorMessage name={name} />
          </div>
        );
      }}
    </Field>
  );
};

export default Input;
