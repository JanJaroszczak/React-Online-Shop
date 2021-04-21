import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Alert from '../atoms/Alert';

import {
  alertVariants,
  buttonVariants,
} from '../../utils/atomsTypesAndVariants';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

import { StyledInputsWrapper } from './styles/StyledAccountDataForm';

const AccountDataForm = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isInputReadOnly, setIsInputReadOnly] = useState(true);

  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessAlert]);

  const renderAlert = () => (
    <>
      {isSuccessAlert && (
        <Alert
          variant={alertVariants.accountDataChange}
          severity="success"
          message="Your data has been successfully updated!"
          visible={true}
        />
      )}
    </>
  );

  return (
    <div>
      {currentUser && (
        <Formik
          initialValues={{
            userName: `${currentUser.userName}`,
            userSurname: `${currentUser.userSurname}`,
            userStreet: `${currentUser.userStreet}`,
            userZipCode: `${currentUser.userZipCode}`,
            userCity: `${currentUser.userCity}`,
            userPhone: `${currentUser.userPhone}`,
          }}
          onSubmit={(values) => {
            console.log(values);
            console.log('submit');

            const {
              userName,
              userSurname,
              userStreet,
              userZipCode,
              userCity,
              userPhone,
            } = values;

            if (isInputReadOnly) setIsInputReadOnly(false);

            if (!isInputReadOnly) {
              setIsInputReadOnly(true);

              updateUserDataInFirestore(currentUser.userId, {
                userName,
                userSurname,
                userStreet,
                userZipCode,
                userCity,
                userPhone,
              });
            }
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <StyledInputsWrapper>
                <Input
                  type="text"
                  name="userName"
                  label="Name:"
                  placeholder={isInputReadOnly ? '' : `Type your name`}
                  value={values.userName}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                  required
                />
                <Input
                  type="text"
                  name="userSurname"
                  label="Surname:"
                  placeholder={isInputReadOnly ? '' : `Type your surname`}
                  value={values.userSurname}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userStreet"
                  label="Street:"
                  placeholder={isInputReadOnly ? '' : `Type your street`}
                  value={values.userStreet}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userZipCode"
                  label="Zip code:"
                  placeholder={isInputReadOnly ? '' : `Type your zip code`}
                  value={values.userZipCode}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userCity"
                  label="City:"
                  placeholder={isInputReadOnly ? '' : `Type your city`}
                  value={values.userCity}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userPhone"
                  label="Phone number:"
                  placeholder={isInputReadOnly ? '' : `Type your phone number`}
                  value={values.userPhone}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />

                <Button
                  variant={buttonVariants.accountDataChange}
                  type="submit"
                  label={isInputReadOnly ? 'Edit Your Data' : 'Save Your Data'}
                />
              </StyledInputsWrapper>
            </Form>
          )}
        </Formik>
      )}
      {renderAlert()}
    </div>
  );
};

export default AccountDataForm;
