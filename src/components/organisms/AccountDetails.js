import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import AccountDataForm from '../molecules/AccountDataForm';

const StyledPasswordChangeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  /* border: 1px solid black; */

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const AccountDetails = () => {
  return (
    <StyledPasswordChangeWrapper>
      <Heading
        type={'accountPage'}
        heading={''}
        headingDescription={`DATA CURRENTLY SAVED ON YOUR ACCOUNT:`}
      />
      <AccountDataForm />
    </StyledPasswordChangeWrapper>
  );
};

export default AccountDetails;
