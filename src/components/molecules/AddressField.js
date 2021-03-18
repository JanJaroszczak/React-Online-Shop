import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';

const StyledAddress = styled.address`
  margin-top: 30px;
  padding-left: 80px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* border: 1px solid black; */
`;

const AddressField = () => {
  return (
    <div>
      <Heading
        // type={'specialOffer'}
        heading={'our address'}
        headingDescription={'you can find us here:'}
      />
      <StyledAddress>
        Example.com
        <br />
        Box 564, Disneyland
        <br />
        USA
        <br />
        <br />
        (571) 400-1255 <br />
        info@info.com
      </StyledAddress>
    </div>
  );
};

export default AddressField;
