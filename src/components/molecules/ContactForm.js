import React from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';

import {
  StyledFormWrapper,
  StyledInputWrapper,
  StyledErrorWrapper,
  StyledTextAreaLabel,
  StyledTextarea,
  StyledTermsWrapper,
  StyledCheckboxLabel,
} from './styles/StyledContactForm';

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Enter your name!'),
  userEmail: Yup.string().email('Invalid email!').required('Enter email!'),
  userMessage: Yup.string().required('Enter message!').min(10, 'Min. 10 char.'),
  acceptTerms: Yup.bool().oneOf(
    [true],
    'You need to accept Terms and Conditions!'
  ),
});

const ContactForm = () => {
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
            console.log(values);

            emailjs
              .send(
                'contact_service',
                'contact_form',
                values,
                process.env.REACT_APP_EMAILJS_USERID
              )
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );

            resetForm();
            document.querySelector('#terms').checked = false;
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <Input
                type="text"
                name="userName"
                label="*Name:"
                placeholder="Type your name"
                value={values.userName}
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

              <StyledInputWrapper>
                <StyledTextAreaLabel htmlFor="userMessage">
                  *Message:
                </StyledTextAreaLabel>
                <StyledTextarea
                  id="userMessage"
                  type="text"
                  name="userMessage"
                  placeholder="Type your message"
                  value={values.userMessage}
                  onChange={handleChange}
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="userMessage" />
                </StyledErrorWrapper>
              </StyledInputWrapper>
              <StyledTermsWrapper>
                <input
                  style={{ width: '20px', height: '20px' }}
                  id="terms"
                  type="checkbox"
                  name="acceptTerms"
                  checked={values.acceptTerms}
                  onChange={handleChange}
                />
                <StyledCheckboxLabel>
                  <Link to={routes.terms} style={{ textDecoration: 'none' }}>
                    Accept Terms and Conditions
                  </Link>
                </StyledCheckboxLabel>
                <StyledErrorWrapper>
                  <ErrorMessage name="acceptTerms" />
                </StyledErrorWrapper>
              </StyledTermsWrapper>
              <Button type="submit" label="send message" />
            </Form>
          )}
        </Formik>
      </StyledFormWrapper>
    </div>
  );
};

export default ContactForm;
