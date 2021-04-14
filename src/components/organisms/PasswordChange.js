import React from 'react';

import Heading from '../atoms/Heading';
import EmailOrPasswordChangeForm from '../molecules/EmailOrPasswordChangeForm';
import { StyledDataChangeWrapper } from './styles/StyledStyledDataChangeWrapper';

const PasswordChange = () => {
  return (
    <StyledDataChangeWrapper>
      <Heading
        type={'accountPage'}
        heading={''}
        headingDescription={`enter your current password and a new one:`}
      />
      <EmailOrPasswordChangeForm />
    </StyledDataChangeWrapper>
  );
};

export default PasswordChange;
