import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Form, Formik } from 'formik';
import styled from 'styled-components';

import { auth } from '../../firebase/firebaseConfig';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Alert from '../atoms/Alert';

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

const PasswordChangeForm = ({ isSignUp, beforeCheckout }) => {
  const [oldPasswordError, setOldPasswordError] = useState('-');
  const [oldPasswordErrorVisibility, setOldPasswordErrorVisibility] = useState(
    'hidden'
  );
  const [newPasswordError, setNewPasswordError] = useState('-');
  const [newPasswordErrorVisibility, setNewPasswordErrorVisibility] = useState(
    'hidden'
  );
  const [
    newPasswordConfirmationError,
    setNewPasswordConfirmationError,
  ] = useState('-');
  const [
    newPasswordConfirmationErrorVisibility,
    setNewPasswordConfirmationErrorVisibility,
  ] = useState('hidden');

  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessAlert]);

  return (
    <div>
      <Formik
        initialValues={{
          userOldPassword: '',
          userNewPassword: '',
          userNewPasswordConfirmation: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          console.log('submit');

          setOldPasswordErrorVisibility('hidden');
          setNewPasswordErrorVisibility('hidden');
          setNewPasswordConfirmationErrorVisibility('hidden');

          const {
            userOldPassword,
            userNewPassword,
            userNewPasswordConfirmation,
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
                userNewPassword === userNewPasswordConfirmation &&
                userNewPassword !== userOldPassword
              ) {
                user
                  .updatePassword(userNewPassword)
                  .then(() => {
                    console.log('change password ok');
                    setIsSuccessAlert(true);
                  })
                  .catch((error) => {
                    console.log('change password error');
                    if (userNewPassword) setNewPasswordError(error.message);
                    else setNewPasswordError('Please enter a new password.');
                    setNewPasswordErrorVisibility('visible');
                  });
              } else if (
                userNewPassword === userNewPasswordConfirmation &&
                userNewPassword === userOldPassword
              ) {
                setNewPasswordError(
                  'Your new password must be different than the old one.'
                );
                setNewPasswordErrorVisibility('visible');
              } else if (
                userNewPassword &&
                userNewPasswordConfirmation &&
                userNewPassword !== userNewPasswordConfirmation
              ) {
                setNewPasswordError(
                  "Your new password doesn't match its confirmation."
                );
                setNewPasswordErrorVisibility('visible');
              } else if (!userNewPassword && userNewPasswordConfirmation) {
                setNewPasswordError('Please enter a new password twice.');
                setNewPasswordErrorVisibility('visible');
              } else if (userNewPassword && !userNewPasswordConfirmation) {
                setNewPasswordConfirmationError(
                  'Please enter a new password twice.'
                );
                setNewPasswordConfirmationErrorVisibility('visible');
              }
            })
            .catch((error) => {
              console.log('reauth error');
              if (userOldPassword) {
                setOldPasswordError(error.message);
              } else if (!userOldPassword) {
                setOldPasswordError('Please enter your old password.');
              }
              setOldPasswordErrorVisibility('visible');

              if (
                userNewPassword &&
                userNewPasswordConfirmation &&
                userNewPassword !== userNewPasswordConfirmation
              ) {
                setNewPasswordError(
                  "Your new password doesn't match its confirmation."
                );
                setNewPasswordErrorVisibility('visible');
              } else if (!userNewPassword && userNewPasswordConfirmation) {
                setNewPasswordError('Please enter a new password twice.');
                setNewPasswordErrorVisibility('visible');
              } else if (userNewPassword && !userNewPasswordConfirmation) {
                setNewPasswordConfirmationError(
                  'Please enter a new password twice.'
                );
                setNewPasswordConfirmationErrorVisibility('visible');
              }

              //   else if (
              //     !userOldPassword &&
              //     userNewPassword &&
              //     userNewPasswordConfirmation &&
              //     userNewPassword === userNewPasswordConfirmation
              //   ) {
              //     setOldPasswordError('Please enter your old password.');
              //   } else if (!userOldPassword) {
              //   }

              // {
              //   setOldPasswordError('Please enter your old password.');
              //   setOldPasswordErrorVisibility('visible');

              //   setNewPasswordError('Please enter a new password.');
              //   setNewPasswordErrorVisibility('visible');
              // }
            });

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <StyledInputsWrapper>
              <Input
                variant="passwordChange"
                type="password"
                name="userOldPassword"
                label="*Old password:"
                placeholder="Type your old password"
                value={values.userOldPassword}
                onChangeHandler={handleChange}
              />
              <StyledError
                style={{ visibility: `${oldPasswordErrorVisibility}` }}
              >
                {oldPasswordError}
              </StyledError>

              <Input
                variant="passwordChange"
                type="password"
                name="userNewPassword"
                label="*New password:"
                placeholder="Type your new password"
                value={values.userNewPassword}
                onChangeHandler={handleChange}
              />
              <StyledError
                style={{ visibility: `${newPasswordErrorVisibility}` }}
              >
                {newPasswordError}
              </StyledError>

              <Input
                variant="passwordChange"
                type="password"
                name="userNewPasswordConfirmation"
                label="*New password confirmation:"
                placeholder="Type your new password confirmation"
                value={values.userNewPasswordConfirmation}
                onChangeHandler={handleChange}
              />
              <StyledError
                style={{
                  visibility: `${newPasswordConfirmationErrorVisibility}`,
                }}
              >
                {newPasswordConfirmationError}
              </StyledError>

              <Button
                variant="passwordChange"
                type="submit"
                label="Change Password"
              />
            </StyledInputsWrapper>
          </Form>
        )}
      </Formik>
      {isSuccessAlert && (
        <Alert
          variant="passwordChange"
          severity="success"
          message="Password succesfully changed!"
          visible={true}
        />
      )}
    </div>
  );
};

export default PasswordChangeForm;
