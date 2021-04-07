import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import ContactForm from '../components/molecules/ContactForm';
import AddressField from '../components/molecules/AddressField';
import MapWrapped from '../components/organisms/Map';

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 50px auto;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 10px auto;
  } ;
`;

const ContactPage = () => {
  return (
    <div>
      <StyledMapWrapper>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledMapWrapper>
      <StyledContactPageWrapper>
        <ContactForm />
        <AddressField />
      </StyledContactPageWrapper>
    </div>
  );
};

export default ContactPage;
