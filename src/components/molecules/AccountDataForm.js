import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Alert from '../atoms/Alert';

import { alertMessages } from '../../helpers/alertMessages';
import {
  alertVariants,
  buttonVariants,
} from '../../helpers/atomsTypesAndVariants';
import { buttonLabels } from '../../helpers/buttonLabels';
import { inputLabels, inputPlaceholders } from '../../helpers/inputStrings';
import { validationMessages } from '../../helpers/validationMessages';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

import { StyledInputsWrapper } from './styles/StyledAccountDataForm';

const { zipCodeAtLeast5Chars, phoneAtLeast9Chars } = validationMessages;

const contactValidationSchema = Yup.object().shape({
  userZipCode: Yup.string().min(5, zipCodeAtLeast5Chars),
  userPhone: Yup.string().min(9, phoneAtLeast9Chars),
});

const AccountDataForm = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isInputReadOnly, setIsInputReadOnly] = useState(true);

  const currentUser = useSelector(({ user }) => user.currentUser);

  const { name, surname, street, zipCode, city, phone } = inputLabels;

  const {
    typeName,
    typeSurname,
    typeStreet,
    typeZipCode,
    typeCity,
    typePhone,
  } = inputPlaceholders;

  const { editData, saveData } = buttonLabels;

  useEffect(() => {
    let timer;
    if (isSuccessAlert) {
      timer = setTimeout(() => {
        setIsSuccessAlert(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessAlert]);

  const renderAlert = () => (
    <>
      {isSuccessAlert && (
        <Alert
          variant={alertVariants.accountDataChange}
          message={alertMessages.userDataUpdate}
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
          validationSchema={contactValidationSchema}
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

              setIsSuccessAlert(true);
            }
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <StyledInputsWrapper>
                <Input
                  type="text"
                  name="userName"
                  label={name}
                  placeholder={isInputReadOnly ? '' : typeName}
                  value={values.userName}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                  required
                />
                <Input
                  type="text"
                  name="userSurname"
                  label={surname}
                  placeholder={isInputReadOnly ? '' : typeSurname}
                  value={values.userSurname}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userStreet"
                  label={street}
                  placeholder={isInputReadOnly ? '' : typeStreet}
                  value={values.userStreet}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userZipCode"
                  label={zipCode}
                  placeholder={isInputReadOnly ? '' : typeZipCode}
                  value={values.userZipCode}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userCity"
                  label={city}
                  placeholder={isInputReadOnly ? '' : typeCity}
                  value={values.userCity}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />
                <Input
                  type="text"
                  name="userPhone"
                  label={phone}
                  placeholder={isInputReadOnly ? '' : typePhone}
                  value={values.userPhone}
                  onChangeHandler={handleChange}
                  readOnly={isInputReadOnly}
                />

                <Button
                  variant={buttonVariants.accountDataChange}
                  type="submit"
                  label={isInputReadOnly ? editData : saveData}
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
