import React from 'react';

import EmailOrPasswordChangeForm from '../molecules/EmailOrPasswordChangeForm';
import Heading from '../atoms/Heading';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';

import { StyledDataChangeWrapper } from './styles/StyledStyledDataChangeWrapper';

const PasswordChange = () => {
  return (
    <StyledDataChangeWrapper>
      <Heading
        type={headingTypes.accountPage}
        headingDescription={`enter your current password and a new one:`}
      />
      <EmailOrPasswordChangeForm />
    </StyledDataChangeWrapper>
  );
};

export default PasswordChange;
