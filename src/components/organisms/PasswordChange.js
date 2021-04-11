import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import PasswordChangeForm from '../molecules/PasswordChangeForm';

const StyledPasswordChangeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  /* border: 1px solid black; */

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const PasswordChange = () => {
  return (
    <StyledPasswordChangeWrapper>
      <Heading
        type={'passwordChange'}
        heading={''}
        headingDescription={`enter your current password and a new one:`}
      />
      <PasswordChangeForm />
    </StyledPasswordChangeWrapper>
  );
};

export default PasswordChange;
