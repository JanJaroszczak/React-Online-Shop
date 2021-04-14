import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const AccountDataForm = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isInputReadOnly, setIsInputReadOnly] = useState(true);

  const currentUser = useSelector(({ currentUser }) => currentUser);

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
                  variant="accountDataChange"
                  type="submit"
                  label={isInputReadOnly ? 'Edit Your Data' : 'Save Your Data'}
                />
              </StyledInputsWrapper>
            </Form>
          )}
        </Formik>
      )}
      {isSuccessAlert && (
        <Alert
          variant="accountDataChange"
          severity="success"
          message="Your data has been successfully updated!"
          visible={true}
        />
      )}
    </div>
  );
};

export default AccountDataForm;
