import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebaseConfig';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Alert from '../atoms/Alert';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

const StyledInputsWrapper = styled.div`
  @media (max-width: 600px) {
    max-width: 250px;
    margin: 0 auto;
  }

  /* border: 1px solid black; */
`;

const StyledError = styled.div`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: red;
`;

const EmailOrPasswordChangeForm = ({ emailChange }) => {
  const [oldPasswordError, setOldPasswordError] = useState('-');
  const [oldPasswordErrorVisibility, setOldPasswordErrorVisibility] = useState(
    'hidden'
  );
  const [newDataError, setNewDataError] = useState('-');
  const [newDataErrorVisibility, setNewDataErrorVisibility] = useState(
    'hidden'
  );
  const [newDataConfirmationError, setNewDataConfirmationError] = useState('-');
  const [
    newDataConfirmationErrorVisibility,
    setNewDataConfirmationErrorVisibility,
  ] = useState('hidden');

  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  const currentUser = useSelector(({ currentUser }) => currentUser);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessAlert]);

  const commonNewDataCheck = (userNewData, userNewDataConfirmation) => {
    if (
      userNewData &&
      userNewDataConfirmation &&
      userNewData !== userNewDataConfirmation
    ) {
      setNewDataError(
        `Your new ${
          emailChange ? 'email' : 'password'
        } doesn't match its confirmation.`
      );
      setNewDataErrorVisibility('visible');
    } else if (!userNewData && !userNewDataConfirmation) {
      setNewDataError(
        `Please enter a new ${emailChange ? 'email' : 'password'}.`
      );
      setNewDataErrorVisibility('visible');
      setNewDataConfirmationError(
        `Please enter the new ${
          emailChange ? 'email' : 'password'
        } confirmation.`
      );
      setNewDataConfirmationErrorVisibility('visible');
    } else if (!userNewData && userNewDataConfirmation) {
      setNewDataError(
        `Please enter a new ${emailChange ? 'email' : 'password'} twice.`
      );
      setNewDataErrorVisibility('visible');
    } else if (userNewData && !userNewDataConfirmation) {
      setNewDataConfirmationError(
        `Please enter a new ${emailChange ? 'email' : 'password'} twice.`
      );
      setNewDataConfirmationErrorVisibility('visible');
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          userOldPassword: '',
          userNewData: '',
          userNewDataConfirmation: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          console.log('submit');

          setOldPasswordErrorVisibility('hidden');
          setNewDataErrorVisibility('hidden');
          setNewDataConfirmationErrorVisibility('hidden');

          const {
            userOldPassword,
            userNewData,
            userNewDataConfirmation,
          } = values;

          const user = auth.currentUser;
          const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            userOldPassword
          );

          console.log(credential);

          user
            .reauthenticateWithCredential(credential)
            .then(() => {
              console.log('reauth ok');
              if (
                userNewData === userNewDataConfirmation &&
                userNewData !== userOldPassword &&
                userNewData !== user.email
              ) {
                if (!emailChange) {
                  user
                    .updatePassword(userNewData)
                    .then(() => {
                      console.log('change password ok');
                      updateUserDataInFirestore(currentUser.userId, {
                        userPassword: userNewData,
                      });
                      setIsSuccessAlert(true);
                    })
                    .catch((error) => {
                      console.log('change password error');
                      if (userNewData) setNewDataError(`${error.message}.`);
                      setNewDataErrorVisibility('visible');
                    });
                } else {
                  user
                    .updateEmail(userNewData)
                    .then(() => {
                      console.log('change email ok');
                      updateUserDataInFirestore(currentUser.userId, {
                        userEmail: userNewData,
                      });
                      setIsSuccessAlert(true);
                    })
                    .catch((error) => {
                      console.log('change email error');
                      if (userNewData) setNewDataError(`${error.message}`);
                      setNewDataErrorVisibility('visible');
                    });
                }
              } else if (
                userNewData === userNewDataConfirmation &&
                (userNewData === userOldPassword || userNewData === user.email)
              ) {
                setNewDataError(
                  `Your new ${
                    emailChange ? 'email' : 'password'
                  } must be different than the old one.`
                );
                setNewDataErrorVisibility('visible');
              }

              commonNewDataCheck(userNewData, userNewDataConfirmation);
            })
            .catch((error) => {
              console.log('reauth error');
              if (userOldPassword) {
                setOldPasswordError(error.message);
              } else if (!userOldPassword) {
                setOldPasswordError('Please enter your old password.');
              }
              setOldPasswordErrorVisibility('visible');

              commonNewDataCheck(userNewData, userNewDataConfirmation);
            });

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <StyledInputsWrapper>
              <Input
                variant="accountDataChange"
                type="password"
                name="userOldPassword"
                label={`*${emailChange ? 'Your' : 'Old'} password:`}
                placeholder={`Type your ${emailChange ? '' : 'old '}password`}
                value={values.userOldPassword}
                onChangeHandler={handleChange}
              />
              <StyledError
                style={{ visibility: `${oldPasswordErrorVisibility}` }}
              >
                {oldPasswordError}
              </StyledError>

              <Input
                variant="accountDataChange"
                type={emailChange ? 'email' : 'password'}
                name="userNewData"
                label={`*New ${emailChange ? 'email' : 'password'}:`}
                placeholder={`Type your new ${
                  emailChange ? 'email' : 'password'
                }`}
                value={values.userNewData}
                onChangeHandler={handleChange}
              />
              <StyledError style={{ visibility: `${newDataErrorVisibility}` }}>
                {newDataError}
              </StyledError>

              <Input
                variant="accountDataChange"
                type={emailChange ? 'email' : 'password'}
                name="userNewDataConfirmation"
                label={`*New ${
                  emailChange ? 'email' : 'password'
                } confirmation:`}
                placeholder={`Type your new ${
                  emailChange ? 'email' : 'password'
                } confirmation`}
                value={values.userNewDataConfirmation}
                onChangeHandler={handleChange}
              />
              <StyledError
                style={{
                  visibility: `${newDataConfirmationErrorVisibility}`,
                }}
              >
                {newDataConfirmationError}
              </StyledError>

              <Button
                variant="accountDataChange"
                type="submit"
                label={`Change ${emailChange ? 'Email' : 'Password'}`}
              />
            </StyledInputsWrapper>
          </Form>
        )}
      </Formik>
      {isSuccessAlert && (
        <Alert
          variant="accountDataChange"
          severity="success"
          message={`${emailChange ? 'Email' : 'Password'} succesfully changed!`}
          visible={true}
        />
      )}
    </div>
  );
};

export default EmailOrPasswordChangeForm;

//
