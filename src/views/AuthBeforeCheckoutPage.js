import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Heading from '../components/atoms/Heading';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';
import { StyledGridWrapper } from './styles/StyledAuthBeforeCheckoutPage';

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
