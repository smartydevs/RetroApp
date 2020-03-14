import React from 'react';
import { Formik } from 'formik';

const RegisterForm = ({ initialValues, validationSchema, onSubmit } = {}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className="cc-register--form">
            <button
              type="Submit"
              disabled={isSubmitting}
              className="cc-register--form_button"
            >
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
