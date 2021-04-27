import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';
import PayPal from './PayPal';
import QuestionModal from '../organisms/QuestionModal';

import { buttonLabels } from '../../helpers/buttonLabels';
import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { inputLabels, inputPlaceholders } from '../../helpers/inputStrings';
import { isTermsModalOpen } from '../../actions';
import { validationMessages } from '../../helpers/validationMessages';
import { updateUserDataInFirestore } from '../../firebase/firestoreUtils';

import {
  StyledFormWrapper,
  StyledErrorWrapper,
  StyledTermsWrapper,
  StyledCheckboxLabel,
  StyledClientDataInputsWrapper,
  StyledCheckoutWrapper,
} from './styles/StyledContactForm';
import { StyledTermsButton } from './styles/StyledTermsButton';

const {
  nameRequired,
  surnameRequired,
  emailRequired,
  invalidEmail,
  streetRequired,
  zipCodeRequired,
  zipCodeAtLeast5Chars,
  cityRequired,
  phoneRequired,
  phoneAtLeast9Chars,
  termsAcceptanceRequired,
} = validationMessages;

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required(nameRequired),
  userSurname: Yup.string().required(surnameRequired),
  userEmail: Yup.string().email(invalidEmail).required(emailRequired),
  userStreet: Yup.string().required(streetRequired),
  userZipCode: Yup.string()
    .required(zipCodeRequired)
    .min(5, zipCodeAtLeast5Chars),
  userCity: Yup.string().required(cityRequired),
  userPhone: Yup.string().required(phoneRequired).min(9, phoneAtLeast9Chars),
  acceptTerms: Yup.bool().oneOf([true], termsAcceptanceRequired),
});

const ClientDataForm = () => {
  const [checkout, setCheckout] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onFormSubmitQuestion, setOnFormSubmitQuestion] = useState('');
  const [emptyUserFields, setEmptyUserFields] = useState(null);
  const [submittedFormValues, setSubmittedFormValues] = useState(null);

  const currentUser = useSelector(({ user }) => user.currentUser);

  const dispatch = useDispatch();

  const { name, surname, email, street, zipCode, city, phone } = inputLabels;

  const {
    typeName,
    typeSurname,
    typeEmail,
    typeStreet,
    typeZipCode,
    typeCity,
    typePhone,
  } = inputPlaceholders;

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
                    label={name}
                    placeholder={typeName}
                    value={values.userName}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userSurname"
                    label={surname}
                    placeholder={typeSurname}
                    value={values.userSurname}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="email"
                    name="userEmail"
                    label={email}
                    placeholder={typeEmail}
                    value={values.userEmail}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userStreet"
                    label={street}
                    placeholder={typeStreet}
                    value={values.userStreet}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userZipCode"
                    label={zipCode}
                    placeholder={typeZipCode}
                    value={values.userZipCode}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userCity"
                    label={city}
                    placeholder={typeCity}
                    value={values.userCity}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="text"
                    name="userPhone"
                    label={phone}
                    placeholder={typePhone}
                    value={values.userPhone}
                    onChangeHandler={handleChange}
                  />
                  <StyledTermsWrapper>
                    <input
                      id="terms"
                      type="checkbox"
                      name="acceptTerms"
                      value={values.acceptTerms}
                      onChange={handleChange}
                    />
                    <StyledCheckboxLabel>
                      <StyledTermsButton
                        type="button"
                        onClick={() => dispatch(isTermsModalOpen(true))}
                      >
                        Accept Terms and Conditions
                      </StyledTermsButton>
                    </StyledCheckboxLabel>
                    <StyledErrorWrapper>
                      <ErrorMessage name="acceptTerms" />
                    </StyledErrorWrapper>
                  </StyledTermsWrapper>
                  {checkout ? (
                    <PayPal />
                  ) : (
                    <Button type="submit" label={buttonLabels.payment} />
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
