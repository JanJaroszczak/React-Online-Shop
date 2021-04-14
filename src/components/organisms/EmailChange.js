import React from 'react';
import { useSelector } from 'react-redux';

import Heading from '../atoms/Heading';
import EmailOrPasswordChangeForm from '../molecules/EmailOrPasswordChangeForm';
import { StyledDataChangeWrapper } from './styles/StyledStyledDataChangeWrapper';

const EmailChange = () => {
  const currentUser = useSelector(({ currentUser }) => currentUser);

  return (
    <StyledDataChangeWrapper>
      {currentUser && (
        <Heading
          type={'accountPage'}
          heading={''}
          headingDescription={`your current email is: ${currentUser.userEmail}`}
          headingDescriptionSecondLine="enter your password and a new email to change it:"
        />
      )}
      <EmailOrPasswordChangeForm emailChange />
    </StyledDataChangeWrapper>
  );
};

export default EmailChange;
