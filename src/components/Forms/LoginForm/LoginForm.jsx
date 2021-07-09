import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

import backendAPI from '../../../apis/backend';
import BaseForm from '../BaseForm/BaseForm';
import TextInput from '../TextInput/TextInput';
import BaseButton from '../../BaseButton/BaseButton';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('This field is required'),
    password: Yup.string().min(6, 'Your password is too short').required('This field is required'),
  });

  const onSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await backendAPI.post('/auth', formValues);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      setMessage('User has been successfuly created');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseForm title="Login">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <TextInput type="email" label="Email" id="email" name="email" placeholder="Email" />
          <TextInput
            type="password"
            label="Password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <BaseButton type="submit">Submit</BaseButton>
        </Form>
      </Formik>
      {loading ? <p className="subtitle1">Creating user...</p> : null}
      {message ? <p className="subtitle1">{message}</p> : null}
    </BaseForm>
  );
};

export default LoginForm;
