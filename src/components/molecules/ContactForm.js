import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import Alert from '../atoms/Alert';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';

import { alertMessages } from '../../helpers/alertMessages';
import { alertVariants } from '../../helpers/atomsTypesAndVariants';
import { buttonLabels } from '../../helpers/buttonLabels';
import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { inputLabels, inputPlaceholders } from '../../helpers/inputStrings';
import { isTermsModalOpen } from '../../actions';
import { validationMessages } from '../../helpers/validationMessages';

import {
  StyledFormWrapper,
  StyledInputWrapper,
  StyledErrorWrapper,
  StyledTextAreaLabel,
  StyledTextarea,
  StyledTermsWrapper,
  StyledCheckboxLabel,
} from './styles/StyledContactForm';
import { StyledTermsButton } from './styles/StyledTermsButton';

const {
  nameRequired,
  emailRequired,
  invalidEmail,
  messageRequired,
  messageAtLeast10Chars,
  termsAcceptanceRequired,
} = validationMessages;

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required(nameRequired),
  userEmail: Yup.string().email(invalidEmail).required(emailRequired),
  userMessage: Yup.string()
    .required(messageRequired)
    .min(10, messageAtLeast10Chars),
  acceptTerms: Yup.bool().oneOf([true], termsAcceptanceRequired),
});

const ContactForm = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  const { name, email, message } = inputLabels;
  const { typeName, typeEmail, typeMessage } = inputPlaceholders;

  const dispatch = useDispatch();

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
    <Alert
      message={alertMessages.messageSent}
      visible={isSuccessAlert}
      variant={alertVariants.accountDataChange}
    />
  );

  return (
    <div>
      <Heading
        type={headingTypes.contact}
        heading={'contact form'}
        headingDescription={'feel free to ask us any question'}
      />
      <StyledFormWrapper>
        <Formik
          initialValues={{
            userName: '',
            userEmail: '',
            userMessage: '',
            acceptTerms: false,
          }}
          validationSchema={contactValidationSchema}
          onSubmit={(values, { resetForm }) => {
            emailjs
              .send(
                'contact_service',
                'contact_form',
                values,
                process.env.REACT_APP_EMAILJS_USERID
              )
              .then(
                () => {
                  setIsSuccessAlert(true);
                },
                (error) => {
                  console.log(error.text);
                }
              );

            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <Input
                type="text"
                name="userName"
                label={name}
                placeholder={typeName}
                value={values.userName}
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

              <StyledInputWrapper>
                <StyledTextAreaLabel htmlFor="userMessage">
                  {message}
                </StyledTextAreaLabel>
                <StyledTextarea
                  id="userMessage"
                  type="text"
                  name="userMessage"
                  placeholder={typeMessage}
                  value={values.userMessage}
                  onChange={handleChange}
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="userMessage" />
                </StyledErrorWrapper>
              </StyledInputWrapper>
              <StyledTermsWrapper>
                <input
                  id="terms"
                  type="checkbox"
                  name="acceptTerms"
                  checked={values.acceptTerms}
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
              <Button type="submit" label={buttonLabels.sendMessage} />
            </Form>
          )}
        </Formik>
      </StyledFormWrapper>
      {renderAlert()}
    </div>
  );
};

export default ContactForm;
