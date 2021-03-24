import React from 'react';
import styled from 'styled-components';

import Heading from '../components/atoms/Heading';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

const StyledSignUpPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const AuthBeforeCheckout = () => {
  return (
    <StyledSignUpPageWrapper>
      <Heading
        type={'authBeforeCheckout'}
        heading={'sign up or log in'}
        headingDescription={''}
      />
      <StyledGridWrapper>
        <SignUpLogInForm isSignUp beforeCheckout />
        <SignUpLogInForm isSignUp={false} beforeCheckout />
      </StyledGridWrapper>
    </StyledSignUpPageWrapper>
  );
};

export default AuthBeforeCheckout;
