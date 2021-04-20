import React from 'react';

import AccountDataForm from '../molecules/AccountDataForm';
import Heading from '../atoms/Heading';

import { headingTypes } from '../../utils/atomsTypesAndVariants';

import { StyledPasswordChangeWrapper } from './styles/StyledAccountDetails';

const AccountDetails = () => {
  return (
    <StyledPasswordChangeWrapper>
      <Heading
        type={headingTypes.accountPage}
        heading={''}
        headingDescription={`DATA CURRENTLY SAVED ON YOUR ACCOUNT:`}
      />
      <AccountDataForm />
    </StyledPasswordChangeWrapper>
  );
};

export default AccountDetails;
