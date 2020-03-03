import React from 'react';
import { withApollo } from 'react-apollo';
import { loginWithPassword } from 'meteor-apollo-accounts';
import * as yup from 'yup';

import LoginForm from './components/LoginForm';
import './style.scss';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = ({ history, client }) => {
  const onSubmit = obj => {
    loginWithPassword(obj, client).then(res => {
      history.push('/dashboard');
    });
  };

  return (
    <div className="cc-login">
      <h1>Login</h1>
      <h6>If you are an organiser or admin</h6>
      <LoginForm
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </div>
  );
};

export default withApollo(Login);
