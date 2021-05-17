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

import { alertMessages } from '../../helpers/alertMessages';
import { auth } from '../../firebase/firebaseConfig';
import { buttonLabels } from '../../helpers/buttonLabels';
import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { inputLabels, inputPlaceholders } from '../../helpers/inputStrings';
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

  const { name, email, choosePassword, password } = inputLabels;
  const { typeName, typeEmail, typePassword } = inputPlaceholders;

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

  const renderHeading = () => (
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
          ? "please fill in your data if you haven't signed up yet"
          : beforeCheckout && !isSignUp
          ? 'please log in if you have your account already'
          : isSignUp
          ? 'please fill in your data to sign up to Cool Cleats'
          : ''
      }
    />
  );

  const renderAlertsAndRedirects = () => (
    <>
      {isSignUp && whichAlertIsOn === 'signup' ? (
        <Alert message={alertMessages.signedUp} visible={true} />
      ) : !isSignUp && whichAlertIsOn === 'login' ? (
        <Alert message={alertMessages.loggedIn} visible={true} />
      ) : (
        <Alert visible={false} />
      )}
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
      {renderHeading()}
      <Formik
        initialValues={{
          userName: '',
          userEmail: '',
          userPassword: '',
        }}
        onSubmit={(values, { resetForm }) => {
          const { userEmail, userName, userPassword } = values;

          setIsLoading(true);

          if (isSignUp) {
            auth
              .createUserWithEmailAndPassword(userEmail, userPassword)
              .then((user) => {
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
                setLogInError(err.message);
              });
          } else {
            auth
              .signInWithEmailAndPassword(userEmail, userPassword)
              .then(() => {
                setWhichAlertIsOn('login');
                setLogInError('');
              })
              .catch((err) => {
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
                  label={name}
                  placeholder={typeName}
                  value={values.userName}
                  onChangeHandler={handleChange}
                />
              )}
              <Input
                id={`userEmail${isSignUp ? 'onSignUp' : 'onLogIn'}`}
                type="email"
                name="userEmail"
                label={email}
                placeholder={typeEmail}
                value={values.userEmail}
                onChangeHandler={handleChange}
              />
              <Input
                id={`userPassword${isSignUp ? 'onSignUp' : 'onLogIn'}`}
                type="password"
                name="userPassword"
                label={isSignUp ? choosePassword : password}
                placeholder={typePassword}
                value={values.userPassword}
                onChangeHandler={handleChange}
              />
              <StyledButtonWrapper>
                <Button
                  type="submit"
                  label={isSignUp ? buttonLabels.signUp : buttonLabels.logIn}
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
