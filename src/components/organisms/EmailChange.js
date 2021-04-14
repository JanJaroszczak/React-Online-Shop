import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Heading from '../atoms/Heading';
import EmailOrPasswordChangeForm from '../molecules/EmailOrPasswordChangeForm';

const StyledPasswordChangeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  /* border: 1px solid black; */

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const EmailChange = () => {
  const currentUser = useSelector(({ currentUser }) => currentUser);

  return (
    <StyledPasswordChangeWrapper>
      {currentUser && (
        <Heading
          type={'accountPage'}
          heading={''}
          headingDescription={`your current email is: ${currentUser.userEmail}`}
          headingDescriptionSecondLine="enter your password and a new email to change it:"
        />
      )}
      <EmailOrPasswordChangeForm emailChange />
    </StyledPasswordChangeWrapper>
  );
};

export default EmailChange;
