import React from 'react';

import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

const SignUpPage = () => {
  return (
    <StyledCommonPageWrapper>
      <SignUpLogInForm isSignUp />
    </StyledCommonPageWrapper>
  );
};

export default SignUpPage;
