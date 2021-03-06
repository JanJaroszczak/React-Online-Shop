import React from 'react';

import AccountDataForm from '../molecules/AccountDataForm';
import Heading from '../atoms/Heading';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';

import { StyledPasswordChangeWrapper } from './styles/StyledAccountDetails';

const AccountDetails = () => {
  return (
    <StyledPasswordChangeWrapper>
      <Heading
        type={headingTypes.accountPage}
        headingDescription={`DATA CURRENTLY SAVED ON YOUR ACCOUNT:`}
      />
      <AccountDataForm />
    </StyledPasswordChangeWrapper>
  );
};

export default AccountDetails;
