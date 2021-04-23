import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Alert from '../atoms/Alert';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';
import Spinner from '../../components/atoms/Spinner';

import { auth } from '../../firebase/firebaseConfig';
import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';
import { usersCollection } from '../../firebase/firestoreUtils';

import {
  StyledWrapper,
  StyledInputsWrapper,
  StyledButtonWrapper,
  StyledError,
} from './styles/StyledSignUpLogInForm';

const SignUpLogInForm = ({ isSignUp, beforeCheckout }) => {
  const [logInError, setLogInError] = useState('');
  const [redirectReady, setRedirectReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [whichAlertIsOn, setWhichAlertIsOn] = useState('');
  const [whichButtonPressed, setWhichButtonPressed] = useState('');

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    setRedirectReady(false);
    setWhichButtonPressed('');
  }, []);

  useEffect(() => {
    let timer = null;
    if (currentUser) {
      timer = setTimeout(() => {
        setRedirectReady(true);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentUser]);

  const renderAlertsAndRedirects = () => (
    <>
      {isSignUp && whichAlertIsOn === 'signup' ? (
        <Alert
          severity="success"
          message="You have been signed up!"
          visible={true}
        />
      ) : !isSignUp && whichAlertIsOn === 'login' ? (
        <Alert
          severity="success"
          message="You have been logged in!"
          visible={true}
        />
      ) : null}
      {beforeCheckout && redirectReady ? (
        <Redirect to={routes.checkout} />
      ) : !beforeCheckout && redirectReady ? (
        <Redirect to={routes.home} />
      ) : null}
    </>
  );

  const renderSpinners = () => (
    <>
      {!isSignUp && whichButtonPressed === 'login' && isLoading && (
        <Spinner
          isLoading={1}
          left={'100px'}
          top={'50%'}
          size={20}
          translateX={'0'}
          translateY={'-43%'}
        />
      )}
      {isSignUp && whichButtonPressed === 'signup' && isLoading && (
        <Spinner
          isLoading={1}
          left={'100px'}
          top={'50%'}
          size={20}
          translateX={'0'}
          translateY={'-43%'}
        />
      )}
    </>
  );

  return (
    <StyledWrapper beforeCheckout={beforeCheckout}>
      <Heading
        type={
          isTablet && !beforeCheckout
            ? headingTypes.mobileTopHeading
            : isTablet
            ? ''
            : beforeCheckout
            ? headingTypes.authBeforeCheckoutSubheading
            : headingTypes.auth
        }
        heading={beforeCheckout ? '' : isSignUp ? 'sign up' : 'log in'}
        headingDescription={
          beforeCheckout && isSignUp
            ? "please fill in your data if you haven't signed yet"
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

          setIsLoading(true);

          if (isSignUp) {
            auth
              .createUserWithEmailAndPassword(userEmail, userPassword)
              .then((user) => {
                // setWhichButtonPressed('signup');
                setWhichAlertIsOn('signup');
                const userId = user.user.uid;

                const newUser = {
                  userName,
                  userSurname: '',
                  userEmail,
                  userPassword,
                  userId,
                  ordersHistory: [],
                  userPhone: '',
                  userStreet: '',
                  userZipCode: '',
                  userCity: '',
                };

                usersCollection.doc(userId).set({
                  ...newUser,
                });
              })
              .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setLogInError(err.message);
              });
          } else {
            auth
              .signInWithEmailAndPassword(userEmail, userPassword)
              .then((user) => {
                console.log(user);
                // setWhichButtonPressed('login');
                setWhichAlertIsOn('login');

                setLogInError('');
              })
              .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setLogInError(err.message);
              });
          }

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <StyledInputsWrapper>
              {isSignUp && (
                <Input
                  id="userName"
                  type="text"
                  name="userName"
                  label="*Name:"
                  placeholder="Type your name"
                  value={values.userName}
                  onChangeHandler={handleChange}
                />
              )}
              <Input
                id={`userEmail${isSignUp ? 'onSignUp' : 'onLogIn'}`}
                type="email"
                name="userEmail"
                label="*Email:"
                placeholder="Type your email"
                value={values.userEmail}
                onChangeHandler={handleChange}
              />
              <Input
                id={`userPassword${isSignUp ? 'onSignUp' : 'onLogIn'}`}
                type="password"
                name="userPassword"
                label={isSignUp ? '*Choose your password:' : '*Password:'}
                placeholder="Type your password"
                value={values.userPassword}
                onChangeHandler={handleChange}
              />
              <StyledButtonWrapper>
                <Button
                  type="submit"
                  label={isSignUp ? 'Sign Up' : 'Log In'}
                  clicked={
                    isSignUp
                      ? () => setWhichButtonPressed('signup')
                      : () => setWhichButtonPressed('login')
                  }
                />
                {renderSpinners()}
              </StyledButtonWrapper>
              <StyledError>{logInError}</StyledError>
            </StyledInputsWrapper>
          </Form>
        )}
      </Formik>
      {renderAlertsAndRedirects()}
    </StyledWrapper>
  );
};

export default SignUpLogInForm;
