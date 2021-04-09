import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  } ;
`;

const AuthBeforeCheckoutPage = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledSignUpPageWrapper>
      <Heading
        type={isTablet ? 'mobileAuthBeforeCheckout' : 'authBeforeCheckout'}
        heading={'sign up or log in'}
        headingDescription={''}
      />
      <StyledGridWrapper>
        <SignUpLogInForm isSignUp={false} beforeCheckout />
        <SignUpLogInForm isSignUp beforeCheckout />
      </StyledGridWrapper>
    </StyledSignUpPageWrapper>
  );
};

export default AuthBeforeCheckoutPage;
