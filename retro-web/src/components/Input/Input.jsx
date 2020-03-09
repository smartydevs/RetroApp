import React from 'react';
import { Field } from 'formik';

import { ErrorMessage } from '../index';
import './style.scss';

const Input = ({ name, type, labelText = null, placeholder = null, style }) => {
  console.log(style)
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <div className="cc-input--container">
            <label htmlFor={name}>{labelText}</label>
            <input
              type={type}
              placeholder={placeholder}
              className="cc-input_input"
              style={style}
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
