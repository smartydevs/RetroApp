import React from 'react';
import { withApollo } from 'react-apollo';
import * as yup from 'yup';

import './style.scss';
import { Card } from '../../components';
import RegisterForm from './components/RegisterForm';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

// const validationSchema =

const Register = () => {
  return (
    <div className="cc-register">
      <Card className="cc-register_card">
        <h1 className="cc-register_title">Register</h1>
        <RegisterForm initialValues={initialValues} />
      </Card>
    </div>
  );
};

export default withApollo(Register);
