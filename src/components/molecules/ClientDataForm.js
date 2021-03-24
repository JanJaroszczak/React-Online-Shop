import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Input from '../atoms/Input';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import PayPal from './PayPal';
import {
  StyledFormWrapper,
  StyledErrorWrapper,
  StyledTermsWrapper,
  StyledCheckboxLabel,
} from './styles/StyledContactForm';

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Enter your name!'),
  userEmail: Yup.string().email('Invalid email!').required('Enter email!'),
  userStreet: Yup.string().required('Enter your street!'),
  userZipCode: Yup.string().required('Enter your zip code!'),
  userCity: Yup.string().required('Enter your city!'),
  userPhone: Yup.string().required('Enter your phone number!'),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept terms!'),
});

const StyledCheckoutWrapper = styled.div`
  margin-top: 30px;
  margin-left: 50px;

  /* border: 1px solid black; */
`;

const ClientDataForm = () => {
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    setCheckout(false);
  }, []);

  return (
    <StyledCheckoutWrapper>
      <Heading
        type={'checkout'}
        heading={'checkout'}
        headingDescription={'please fill in your data to proceed with payment'}
      />
      <StyledFormWrapper checkout>
        <Formik
          initialValues={{
            userName: '',
            userEmail: '',
            userStreet: '',
            userZipCode: '',
            userCity: '',
            userPhone: '',
            acceptTerms: false,
          }}
          validationSchema={contactValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            setCheckout(true);
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
                <StyledCheckboxLabel htmlFor={'terms'}>
                  Accept Terms and Conditions
                </StyledCheckboxLabel>
                <StyledErrorWrapper>
                  <ErrorMessage name="acceptTerms" />
                </StyledErrorWrapper>
              </StyledTermsWrapper>
              {checkout ? <PayPal /> : <Button type="submit" label="payment" />}
              {/* <Button type="submit" label="payment" />
              {checkout && <PayPal />} */}
            </Form>
          )}
        </Formik>
      </StyledFormWrapper>
    </StyledCheckoutWrapper>
  );
};

export default ClientDataForm;
