import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';
import PayPal from './PayPal';
import QuestionModal from '../organisms/QuestionModal';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

import {
  StyledFormWrapper,
  StyledErrorWrapper,
  StyledTermsWrapper,
  StyledCheckboxLabel,
  StyledClientDataInputsWrapper,
  StyledCheckoutWrapper,
} from './styles/StyledContactForm';

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Enter your name!'),
  userSurname: Yup.string().required('Enter your surname!'),
  userEmail: Yup.string().email('Invalid email!').required('Enter email!'),
  userStreet: Yup.string().required('Enter your street!'),
  userZipCode: Yup.string()
    .required('Enter your zip code!')
    .min(5, 'Zip code must contain at least 5 characters!'),
  userCity: Yup.string().required('Enter your city!'),
  userPhone: Yup.string()
    .required('Enter your phone number!')
    .min(9, 'Phone number must contain at least 9 characters!'),
  acceptTerms: Yup.bool().oneOf(
    [true],
    'You need to accept Terms and Conditions!'
  ),
});

const ClientDataForm = () => {
  const [checkout, setCheckout] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onFormSubmitQuestion, setOnFormSubmitQuestion] = useState('');
  const [emptyUserFields, setEmptyUserFields] = useState(null);
  const [submittedFormValues, setSubmittedFormValues] = useState(null);

  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    if (currentUser) {
      const emptyUserKeys = Object.entries(currentUser)
        .filter((entry) => entry[1] === '')
        .map((entryName) => entryName[0]);

      //Explanation:
      // list = Object.entries(buttons)
      // .filter(([key, value]) => `${key}`[value] !== 'undefined' )
      // .map(([key, value], idx) => `{${idx} {${key}: ${value}}}`)

      setEmptyUserFields(emptyUserKeys);

      console.log(currentUser);
      console.log(Object.entries(currentUser));
      console.log(
        Object.entries(currentUser).filter((entry) => entry[1] === '')
      );
      console.log(emptyUserKeys);

      const emptyUserFieldsNamesToDisplay = emptyUserKeys.map((key) =>
        key.substring(4)
      );

      const allFieldsButLast = emptyUserFieldsNamesToDisplay.slice(0, -1);

      const lastField = emptyUserFieldsNamesToDisplay.slice(-1);

      const question = `Do you want to set entered ${allFieldsButLast.join(
        ', '
      )} ${
        emptyUserFieldsNamesToDisplay.length > 1 ? 'and' : ''
      } ${lastField} as default for your account?`;

      // console.log(onFormSubmitQuestion);
      setOnFormSubmitQuestion(question);
    }
  }, [currentUser]);

  // console.log(onFormSubmitQuestion);

  useEffect(() => {
    console.log('checkout set false');
    setCheckout(false);
    setIsModalOpen(false);
  }, []);

  const noAnswerHandler = () => {
    setIsModalOpen(false);
    console.log('checkout set true');
    setCheckout(true);
  };

  const yesAnswerHandler = () => {
    const userDataToUpdateInFirestore = Object.assign(
      {},
      ...emptyUserFields.map((key) => ({ [key]: submittedFormValues[key] }))
    );

    console.log(...emptyUserFields);
    console.log(userDataToUpdateInFirestore);

    const userDataToUpdateInFirestore2 = Object.assign(
      {},
      emptyUserFields.map((key) => ({ [key]: submittedFormValues[key] }))
    );

    console.log(emptyUserFields);
    console.log(userDataToUpdateInFirestore2);

    //Explanation:
    // const raw = {
    //   item1: { key: 'sdfd', value: 'sdfd' },
    //   item2: { key: 'sdfd', value: 'sdfd' },
    //   item3: { key: 'sdfd', value: 'sdfd' },
    // };

    // const filteredKeys = ['item1', 'item3'];

    // const filtered = Object.assign(
    //   {},
    //   ...filteredKeys.map((key) => ({ [key]: raw[key] }))
    // );

    updateUserDataInFirestore(currentUser.userId, userDataToUpdateInFirestore);

    setIsModalOpen(false);
    console.log('checkout set true');
    setCheckout(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledCheckoutWrapper>
      <QuestionModal
        isOpen={isModalOpen}
        question={onFormSubmitQuestion}
        onCloseModal={closeModalHandler}
        onNoAnswer={noAnswerHandler}
        onYesAnswer={yesAnswerHandler}
      />
      <Heading
        type={headingTypes.checkout}
        heading={'checkout'}
        headingDescription={'please fill in your data to proceed with payment'}
      />
      <StyledFormWrapper checkout>
        {currentUser && (
          <Formik
            initialValues={{
              userName: `${currentUser.userName}`,
              userSurname: `${currentUser.userSurname}`,
              userEmail: `${currentUser.userEmail}`,
              userStreet: `${currentUser.userStreet}`,
              userZipCode: `${currentUser.userZipCode}`,
              userCity: `${currentUser.userCity}`,
              userPhone: `${currentUser.userPhone}`,
              acceptTerms: false,
            }}
            validationSchema={contactValidationSchema}
            onSubmit={(values) => {
              console.log(values);

              if (emptyUserFields.length > 0) {
                setIsModalOpen(true);
              } else {
                console.log('checkout set true');
                setCheckout(true);
              }

              setSubmittedFormValues(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <StyledClientDataInputsWrapper>
                  <Input
                    type="text"
                    name="userName"
                    label="*Name:"
                    placeholder="Type your name"
                    value={values.userName}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userSurname"
                    label="*Surname:"
                    placeholder="Type your surname"
                    value={values.userSurname}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="email"
                    name="userEmail"
                    label="*Email:"
                    placeholder="Type your email"
                    value={values.userEmail}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userStreet"
                    label="*Street:"
                    placeholder="Type your street"
                    value={values.userStreet}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userZipCode"
                    label="*Zip code:"
                    placeholder="Type your zip code"
                    value={values.userZipCode}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userCity"
                    label="*City:"
                    placeholder="Type your city"
                    value={values.userCity}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userPhone"
                    label="*Phone number:"
                    placeholder="Type your phone number"
                    value={values.userPhone}
                    onChangeHandler={handleChange}
                  />
                  <StyledTermsWrapper>
                    <input
                      style={{ width: '20px', height: '20px' }}
                      id="terms"
                      type="checkbox"
                      name="acceptTerms"
                      value={values.acceptTerms}
                      onChange={handleChange}
                    />
                    <StyledCheckboxLabel>
                      <Link
                        to={routes.terms}
                        style={{ textDecoration: 'none' }}
                      >
                        Accept Terms and Conditions
                      </Link>
                    </StyledCheckboxLabel>
                    <StyledErrorWrapper>
                      <ErrorMessage name="acceptTerms" />
                    </StyledErrorWrapper>
                  </StyledTermsWrapper>
                  {checkout ? (
                    <PayPal />
                  ) : (
                    <Button type="submit" label="payment" />
                  )}
                </StyledClientDataInputsWrapper>
              </Form>
            )}
          </Formik>
        )}
      </StyledFormWrapper>
    </StyledCheckoutWrapper>
  );
};

export default ClientDataForm;
