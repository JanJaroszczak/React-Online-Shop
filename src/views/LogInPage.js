import React from 'react';

import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

const LogInPage = () => {
  return (
    <StyledCommonPageWrapper>
      <SignUpLogInForm isSignUp={false} />
    </StyledCommonPageWrapper>
  );
};

export default LogInPage;
