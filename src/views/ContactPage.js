import React from 'react';

import ContactForm from '../components/molecules/ContactForm';
import AddressField from '../components/molecules/AddressField';
import MapWrapped from '../components/organisms/Map';
import {
  StyledMapWrapper,
  StyledContactPageWrapper,
} from './styles/StyledContactPage';

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
