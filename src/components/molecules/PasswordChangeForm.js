import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
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

  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSuccessAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccessAlert]);

  const currentUser = useSelector(({ currentUser }) => currentUser);

  return (
    <div>
      <Formik
        initialValues={{
          userOldPassword: '',
          userNewPassword: '',
        }}
        // validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          console.log('submit');

          setOldPasswordErrorVisibility('hidden');
          setNewPasswordErrorVisibility('hidden');

          const { userOldPassword, userNewPassword } = values;

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
            })
            .catch((error) => {
              console.log('reauth error');
              if (userOldPassword) setOldPasswordError(error.message);
              else if (!userOldPassword && userNewPassword) {
                setOldPasswordError('Please enter your old password.');
              } else {
                setOldPasswordError('Please enter your old password.');
                setOldPasswordErrorVisibility('visible');

                setNewPasswordError('Please enter a new password.');
                setNewPasswordErrorVisibility('visible');
              }
              setOldPasswordErrorVisibility('visible');
            });

          // if (isSignUp) {
          //   auth
          //     .createUserWithEmailAndPassword(userEmail, userPassword)
          //     .then((user) => {
          //       // const userId = user.user.uid;

          //       usersCollection.doc(userId).set({
          //         ...newUser,
          //       });
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //       setLogInError(err.message);
          //     });
          // } else {
          //   auth
          //     .signInWithEmailAndPassword(userEmail, userPassword)
          //     .then((user) => {
          //       console.log(user);
          //       setWhichButtonPressed('login');
          //       setLogInError('');
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //       setLogInError(err.message);
          //     });
          // }

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
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

            <Button
              variant="passwordChange"
              type="submit"
              label="Change Password"
            />
          </Form>
        )}
      </Formik>
      {isSuccessAlert && (
        <Alert
          severity="success"
          message="Your password has been succesfully changed!"
          visible={true}
        />
      )}
    </div>
  );
};

export default PasswordChangeForm;
