import { Formik } from 'formik';
import React from 'react';

import { ErrorMessage, Input } from '../../../components';

const LoginForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="cc-login--form">
            <Input name="email" type="email" placeholder="Enter you email here" />
            <Input name="password" type="password" />

            <button
              type="Submit"
              disabled={isSubmitting}
              className="cc-login--form_button"
            >
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
