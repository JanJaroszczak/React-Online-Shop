import React from 'react';
import ContactForm from '../components/molecules/ContactForm';
import styled from 'styled-components';

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
  margin: 30px auto;

  /* border: 1px solid black; */
`;

const Contact = () => {
  return (
    <div>
      <StyledMapWrapper>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBgmEL8x5Cz4WdVFWkIjg7NFHApsHG_2PI`}
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

export default Contact;
