import React from 'react';
import { withApollo } from 'react-apollo';
import { loginWithPassword } from 'meteor-apollo-accounts';
import * as yup from 'yup';

import LoginForm from './components/LoginForm';
import { Card } from '../../components';
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

  const onSignUp = () => {}

  return (
    <div className="cc-login">
      <Card className="cc-login_card">
        <h1 className="cc-login_title">Log in</h1>
        <h6 className="cc-login_description">
          If you are an organiser or admin. Don't have an account yet?
          {' '}
          <span onPress={onSignUp} style={{cursor: 'pointer', color: '#f38181'}}>
            Sign up!
          </span>
        </h6>
        <LoginForm
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        />
      </Card>
    </div>
  );
};

export default withApollo(Login);
