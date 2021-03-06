import React from 'react';
import { useSelector } from 'react-redux';

import EmailOrPasswordChangeForm from '../molecules/EmailOrPasswordChangeForm';
import Heading from '../atoms/Heading';

import { headingTypes } from '../../helpers/atomsTypesAndVariants';

import { StyledDataChangeWrapper } from './styles/StyledStyledDataChangeWrapper';

const EmailChange = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);

  return (
    <StyledDataChangeWrapper>
      {currentUser && (
        <Heading
          type={headingTypes.accountPage}
          headingDescription={`your current email is: ${currentUser.userEmail}`}
          headingDescriptionSecondLine="enter your password and a new email to change it:"
        />
      )}
      <EmailOrPasswordChangeForm emailChange />
    </StyledDataChangeWrapper>
  );
};

export default EmailChange;
