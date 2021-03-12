// Wydzielic atomy, najważniejszy input!

import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Enter your name!'),
  userEmail: Yup.string().email('Invalid email!').required('Enter email!'),
  userMessage: Yup.string().required('enter message').min(10, 'Min. 10 char.'),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept terms!'),
});

const ContactForm = () => {
  return (
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

        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <input
            type="text"
            name="userName"
            placeholder="type your name"
            value={values.userName}
            onChange={handleChange}
          />
          <ErrorMessage name="userName" />
          <input
            type="email"
            name="userEmail"
            placeholder="type your email"
            value={values.userEmail}
            onChange={handleChange}
          />
          <ErrorMessage name="userEmail" />
          <textarea
            cols="30"
            rows="10"
            type="text"
            name="userMessage"
            placeholder="type your message"
            value={values.userMessage}
            onChange={handleChange}
          />
          <div style={{ color: 'yellow' }}>
            <ErrorMessage name="userMessage" />
          </div>

          <input
            type="checkbox"
            name="acceptTerms"
            value={values.acceptTerms}
            onChange={handleChange}
          />
          <ErrorMessage name="acceptTerms" />

          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
