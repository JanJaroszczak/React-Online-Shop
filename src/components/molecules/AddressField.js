import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';

const StyledAddressWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 10px;
  } ;
`;

const StyledAddress = styled.address`
  margin-top: 30px;
  padding-left: 80px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  } ;
`;

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
        Box 564, Disneyland
        <br />
        USA
        <br />
        <br />
        (571) 400-1255 <br />
        info@info.com
      </StyledAddress>
    </StyledAddressWrapper>
  );
};

export default AddressField;
