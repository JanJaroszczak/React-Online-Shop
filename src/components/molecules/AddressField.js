import React from 'react';

import Heading from '../atoms/Heading';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';

import { StyledAddress } from './styles/StyledAddressField';

const AddressField = () => {
  return (
    <div>
      <Heading
        type={headingTypes.address}
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
    </div>
  );
};

export default AddressField;
