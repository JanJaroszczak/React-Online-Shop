import React from 'react';
import ContactForm from '../components/molecules/ContactForm';
import styled from 'styled-components';
import AddressField from '../components/molecules/AddressField';

const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 30px auto;

  /* border: 1px solid black; */
`;

const Contact = () => {
  return (
    <div>
      <StyledContactPageWrapper>
        <ContactForm />
        <AddressField />
      </StyledContactPageWrapper>
    </div>
  );
};

export default Contact;
