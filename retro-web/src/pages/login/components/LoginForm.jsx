import { Formik } from 'formik';
import React from 'react';

import { ErrorMessage, Input } from '../../../components';

const styles = {
  inputContainer: {
    width: '300px',
    height: '40px',
    margin: '12px 0',
    border: '1px solid #E5E3E8',
    borderRadius: '10px',
    padding: '0 10px',
    backgroundColor: '#F3F2F5',
    boxShadow: '0 -2px rgba(0, 0, 0, 0.2)'
  }
}

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
            <Input
              name="email"
              type="email"
              placeholder="Enter you email here"
              style={styles.inputContainer}
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password here"
              style={styles.inputContainer}
            />
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
