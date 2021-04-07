import React from 'react';
import styled from 'styled-components';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

const StyledLogInUpPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 20px;

  /* border: 1px solid black; */
`;

const LogInPage = () => {
  return (
    <StyledLogInUpPageWrapper>
      <SignUpLogInForm isSignUp={false} />
    </StyledLogInUpPageWrapper>
  );
};

export default LogInPage;
