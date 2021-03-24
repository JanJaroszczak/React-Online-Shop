import React from 'react';
import styled from 'styled-components';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

const StyledSignUpPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

const SignUpPage = () => {
  return (
    <StyledSignUpPageWrapper>
      <SignUpLogInForm isSignUp />
    </StyledSignUpPageWrapper>
  );
};

export default SignUpPage;
