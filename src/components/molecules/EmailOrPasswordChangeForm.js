import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import Alert from '../atoms/Alert';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

import { auth } from '../../firebase/firebaseConfig';
import {
  alertVariants,
  buttonVariants,
  inputVariants,
} from '../../helpers/atomsTypesAndVariants';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

import {
  StyledInputsWrapper,
  StyledError,
} from './styles/StyledEmailOrPasswordChangeForm';

const EmailOrPasswordChangeForm = ({ emailChange }) => {
  const [oldPasswordError, setOldPasswordError] = useState('-');
  const [oldPasswordErrorVisibility, setOldPasswordErrorVisibility] =
    useState(false);
  const [newDataError, setNewDataError] = useState('-');
  const [newDataErrorVisibility, setNewDataErrorVisibility] = useState(false);
  const [newDataConfirmationError, setNewDataConfirmationError] = useState('-');
  const [
    newDataConfirmationErrorVisibility,
    setNewDataConfirmationErrorVisibility,
  ] = useState(false);

  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  const currentUser = useSelector(({ user }) => user.currentUser);

  const emailOrPassword = emailChange ? 'email' : 'password';

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
        `Your new ${emailOrPassword} doesn't match its confirmation.`
      );
      setNewDataErrorVisibility(true);
    } else if (!userNewData && !userNewDataConfirmation) {
      setNewDataError(`Please enter a new ${emailOrPassword}.`);
      setNewDataErrorVisibility(true);
      setNewDataConfirmationError(
        `Please enter the new ${emailOrPassword} confirmation.`
      );
      setNewDataConfirmationErrorVisibility(true);
    } else if (!userNewData && userNewDataConfirmation) {
      setNewDataError(`Please enter a new ${emailOrPassword} twice.`);
      setNewDataErrorVisibility(true);
    } else if (userNewData && !userNewDataConfirmation) {
      setNewDataConfirmationError(
        `Please enter a new ${emailOrPassword} twice.`
      );
      setNewDataConfirmationErrorVisibility(true);
    }
  };

  const setAllErrorsHidden = () => {
    setOldPasswordErrorVisibility(false);
    setNewDataErrorVisibility(false);
    setNewDataConfirmationErrorVisibility(false);
  };

  const renderAlert = () => (
    <>
      <Alert
        variant={alertVariants.accountDataChange}
        message={`${emailOrPassword[0].toUpperCase()}${emailOrPassword.slice(
          1
        )} succesfully changed!`}
        visible={isSuccessAlert}
      />
    </>
  );

  return (
    <div>
      <Formik
        initialValues={{
          userOldPassword: '',
          userNewData: '',
          userNewDataConfirmation: '',
        }}
        onSubmit={(values, { resetForm }) => {
          setAllErrorsHidden();

          const { userOldPassword, userNewData, userNewDataConfirmation } =
            values;

          const user = auth.currentUser;
          const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            userOldPassword
          );

          user
            .reauthenticateWithCredential(credential)
            .then(() => {
              if (
                userNewData === userNewDataConfirmation &&
                userNewData !== userOldPassword &&
                userNewData !== user.email
              ) {
                if (!emailChange) {
                  user
                    .updatePassword(userNewData)
                    .then(() => {
                      updateUserDataInFirestore(currentUser.userId, {
                        userPassword: userNewData,
                      });
                      setIsSuccessAlert(true);
                    })
                    .catch((error) => {
                      if (userNewData) setNewDataError(`${error.message}.`);
                      setNewDataErrorVisibility(true);
                    });
                } else {
                  user
                    .updateEmail(userNewData)
                    .then(() => {
                      updateUserDataInFirestore(currentUser.userId, {
                        userEmail: userNewData,
                      });
                      setIsSuccessAlert(true);
                    })
                    .catch((error) => {
                      if (userNewData) setNewDataError(`${error.message}`);
                      setNewDataErrorVisibility(true);
                    });
                }
              } else if (
                userNewData === userNewDataConfirmation &&
                (userNewData === userOldPassword || userNewData === user.email)
              ) {
                setNewDataError(
                  `Your new ${emailOrPassword} must be different than the old one.`
                );
                setNewDataErrorVisibility(true);
              }

              commonNewDataCheck(userNewData, userNewDataConfirmation);
            })
            .catch((error) => {
              if (userOldPassword) {
                setOldPasswordError(error.message);
              } else {
                setOldPasswordError('Please enter your old password.');
              }
              setOldPasswordErrorVisibility(true);

              commonNewDataCheck(userNewData, userNewDataConfirmation);
            });

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <StyledInputsWrapper>
              <Input
                variant={inputVariants.accountDataChange}
                type="password"
                name="userOldPassword"
                label={`*${emailChange ? 'Your' : 'Old'} password:`}
                placeholder={`Type your ${emailChange ? '' : 'old '}password`}
                value={values.userOldPassword}
                onChangeHandler={handleChange}
              />
              <StyledError visible={oldPasswordErrorVisibility}>
                {oldPasswordError}
              </StyledError>

              <Input
                variant={inputVariants.accountDataChange}
                type={emailOrPassword}
                name="userNewData"
                label={`*New ${emailOrPassword}:`}
                placeholder={`Type your new ${emailOrPassword}`}
                value={values.userNewData}
                onChangeHandler={handleChange}
              />
              <StyledError visible={newDataErrorVisibility}>
                {newDataError}
              </StyledError>

              <Input
                variant={inputVariants.accountDataChange}
                type={emailOrPassword}
                name="userNewDataConfirmation"
                label={`*New ${emailOrPassword} confirmation:`}
                placeholder={`Type your new ${emailOrPassword} confirmation`}
                value={values.userNewDataConfirmation}
                onChangeHandler={handleChange}
              />
              <StyledError visible={newDataConfirmationErrorVisibility}>
                {newDataConfirmationError}
              </StyledError>
              <Button
                variant={buttonVariants.accountDataChange}
                type="submit"
                label={`Change ${emailOrPassword[0].toUpperCase()}${emailOrPassword.slice(
                  1
                )}`}
              />
            </StyledInputsWrapper>
          </Form>
        )}
      </Formik>
      {renderAlert()}
    </div>
  );
};

export default EmailOrPasswordChangeForm;
