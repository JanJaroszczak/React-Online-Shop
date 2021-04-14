import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Heading from '../components/atoms/Heading';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';
import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

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
    <StyledCommonPageWrapper>
      <Heading
        type={isTablet ? 'mobileAuthBeforeCheckout' : 'authBeforeCheckout'}
        heading={'log in or sign up '}
        headingDescription={''}
      />
      <StyledGridWrapper>
        <SignUpLogInForm isSignUp={false} beforeCheckout />
        <SignUpLogInForm isSignUp beforeCheckout />
      </StyledGridWrapper>
    </StyledCommonPageWrapper>
  );
};

export default AuthBeforeCheckoutPage;
