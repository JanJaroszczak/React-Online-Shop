import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Heading from '../components/atoms/Heading';
import SignUpLogInForm from '../components/molecules/SignUpLogInForm';

import { headingTypes } from '../helpers/atomsTypesAndVariants';
import { mediaQueryStrings } from '../helpers/mediaQueryStrings';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';
import { StyledGridWrapper } from './styles/StyledAuthBeforeCheckoutPage';

const AuthBeforeCheckoutPage = () => {
  const isTablet = useMediaQuery({
    query: mediaQueryStrings.max768,
  });

  return (
    <StyledCommonPageWrapper>
      <Heading
        type={
          isTablet
            ? headingTypes.mobileAuthBeforeCheckout
            : headingTypes.authBeforeCheckout
        }
        heading={'log in or sign up '}
      />
      <StyledGridWrapper>
        <SignUpLogInForm isSignUp={false} beforeCheckout />
        <SignUpLogInForm isSignUp beforeCheckout />
      </StyledGridWrapper>
    </StyledCommonPageWrapper>
  );
};

export default AuthBeforeCheckoutPage;
