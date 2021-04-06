import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  text-transform: uppercase;
  max-width: 1200px;
  margin: 60px auto 20px;
  padding-left: 80px;

  /* border: 1px solid black; */

  ${({ type }) =>
    type === 'specialOffer' &&
    css`
      align-self: center;
      justify-self: start;
      width: auto;

      margin: 0;
      padding-left: 0;
    `}

  ${({ type }) =>
    type === 'productsPage' &&
    css`
      padding-left: 0;
      margin-left: 62px;
    `}

  ${({ type }) =>
    type === 'productPage' &&
    css`
      margin: 0;
      padding: 0;
    `}

     ${({ type }) =>
    type === 'checkout' &&
    css`
      margin: 0;
      padding-left: 0;
    `}

      ${({ type }) =>
    type === 'auth' &&
    css`
      margin-top: 30px;
      padding-left: 0;
    `}

         ${({ type }) =>
    type === 'authBeforeCheckout' &&
    css`
      margin: 0;
      padding-left: 0;
    `}

            ${({ type }) =>
    type === 'orderSummary' &&
    css`
      margin-top: 30px;
    `}

              ${({ type }) =>
    type === 'passwordChange' &&
    css`
      margin-top: 30px;
      padding-left: 0;
    `} 
    
    @media (max-width: 768px) {
    margin: 30px 0;
    padding: 0;
    text-align: center;
  } ;
`;

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  ${({ type }) =>
    type === 'specialOffer' ||
    (type === 'productPage' &&
      css`
        font-size: ${({ theme }) => theme.fontSizes.xxl};
      `)}

  ${({ type }) =>
    type === 'authBeforeCheckout' &&
    css`
      /* margin: 0; */
      margin-top: 30px;
    `}
`;

const StyledHeadingDescription = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 8px;

  ${({ type }) =>
    type === 'specialOffer' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.s};
      margin-top: 12px;
    `}

  ${({ type }) =>
    type === 'authBeforeCheckout' &&
    css`
      margin: 0;
    `}
`;

const SectionHeader = ({ type, heading, headingDescription }) => {
  return (
    <StyledDiv type={type}>
      <StyledHeading type={type}>{heading}</StyledHeading>
      <StyledHeadingDescription type={type}>
        {headingDescription}
      </StyledHeadingDescription>
    </StyledDiv>
  );
};

export default SectionHeader;
