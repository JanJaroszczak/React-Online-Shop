import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../../routes';
import { auth } from '../../firebase/firebaseConfig';
import { usersCollection } from '../../firebase/firestoreUtils';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Alert from '../atoms/Alert';

const StyledError = styled.div`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: red;
`;

const SignUpLogInForm = ({ isSignUp, beforeCheckout }) => {
  const [logInError, setLogInError] = useState('');
  const [redirectReady, setRedirectReady] = useState(false);
  const [whichButtonPressed, setWhichButtonPressed] = useState('');

  const currentUser = useSelector(({ currentUser }) => currentUser);

  useEffect(() => {
    setRedirectReady(false);
    setWhichButtonPressed('');
  }, []);

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        setRedirectReady(true);
      }, 2500);
    }
  }, [currentUser]);

  return (
    <div>
      <Heading
        type={'auth'}
        heading={beforeCheckout ? '' : isSignUp ? 'sign up' : 'log in'}
        headingDescription={
          beforeCheckout && isSignUp
            ? "please fill in your data if you haven't signed up to Cool Cleats yet"
            : beforeCheckout && !isSignUp
            ? 'please log in if you have your account already'
            : isSignUp
            ? 'please fill in your data to sign up to Cool Cleats'
            : ''
        }
      />
      <Formik
        initialValues={{
          userName: '',
          userEmail: '',
          userPassword: '',
        }}
        // validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          const { userEmail, userName, userPassword } = values;

          if (isSignUp) {
            auth
              .createUserWithEmailAndPassword(userEmail, userPassword)
              .then((user) => {
                setWhichButtonPressed('signup');
                const userId = user.user.uid;

                const newUser = {
                  userName,
                  userEmail,
                  userPassword,
                  userId,
                  ordersHistory: [],
                };

                usersCollection.doc(userId).set({
                  ...newUser,
                });
              })
              .catch((err) => {
                console.log(err);
                setLogInError(err.message);
              });
          } else {
            auth
              .signInWithEmailAndPassword(userEmail, userPassword)
              .then((user) => {
                console.log(user);
                setWhichButtonPressed('login');
                setLogInError('');
              })
              .catch((err) => {
                console.log(err);
                setLogInError(err.message);
              });
          }

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            {isSignUp && (
              <Input
                type="text"
                name="userName"
                label="*Name:"
                placeholder="Type your name"
                value={values.userName}
                onChangeHandler={handleChange}
              />
            )}
            <Input
              type="email"
              name="userEmail"
              label="*Email:"
              placeholder="Type your email"
              value={values.userEmail}
              onChangeHandler={handleChange}
            />
            <Input
              type="password"
              name="userPassword"
              label={isSignUp ? '*Choose your password:' : '*Password:'}
              placeholder="Type your password"
              value={values.userPassword}
              onChangeHandler={handleChange}
            />
            <Button type="submit" label={isSignUp ? 'Sign Up' : 'Log In'} />
            <StyledError>{logInError}</StyledError>
          </Form>
        )}
      </Formik>
      {/* {currentUser && (
        <Alert
          severity="success"
          message={
            isSignUp
              ? 'You have been successfully signed up!'
              : 'You have been successfully logged in!'
          }
        />
      )} */}
      {isSignUp && whichButtonPressed === 'signup' ? (
        <Alert
          severity="success"
          message="You have been successfully signed up!"
          visible={true}
        />
      ) : !isSignUp && whichButtonPressed === 'login' ? (
        <Alert
          severity="success"
          message="You have been successfully logged in!"
          visible={true}
        />
      ) : null}
      {beforeCheckout && redirectReady ? (
        <Redirect to={routes.checkout} />
      ) : !beforeCheckout && redirectReady ? (
        <Redirect to={routes.home} />
      ) : null}
    </div>
  );
};

export default SignUpLogInForm;
