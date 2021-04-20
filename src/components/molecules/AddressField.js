import React from 'react';

import Heading from '../atoms/Heading';

import {
  StyledAddressWrapper,
  StyledAddress,
} from './styles/StyledAddressField';

const AddressField = () => {
  return (
    <StyledAddressWrapper>
      <Heading
        type={'address'}
        heading={'our address'}
        headingDescription={'you can find us here:'}
      />
      <StyledAddress>
        Cool Cleats
        <br />
        Box 564, Łódź
        <br />
        USA
        <br />
        <br />
        200-400-301
        <br />
        info@info.com
      </StyledAddress>
    </StyledAddressWrapper>
  );
};

export default AddressField;
