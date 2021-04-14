import React from 'react';

import Heading from '../atoms/Heading';
import AccountDataForm from '../molecules/AccountDataForm';
import { StyledPasswordChangeWrapper } from './styles/StyledAccountDetails';

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
