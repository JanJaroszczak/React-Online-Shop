import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
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
    type === 'contact' &&
    css`
      margin: 0;
      padding-left: 50px;
    `}

    
        ${({ type }) =>
    type === 'address' &&
    css`
      margin: 0;
    `}

      ${({ type }) =>
    type === 'auth' &&
    css`
      padding-top: 30px;
      padding-left: 0;
    `}

        ${({ type }) =>
    type === 'topHeading' &&
    css`
      padding-top: 30px;
    `}

         ${({ type }) =>
    type === 'topSearchPageHeading' &&
    css`
      margin: 30px 0;
      padding-top: 30px;
      padding-left: 0;
      text-align: center;
    `}

         ${({ type }) =>
    type === 'authBeforeCheckout' &&
    css`
      padding-top: 30px;
      padding-left: 0;
    `}

          ${({ type }) =>
    type === 'authBeforeCheckoutSubheading' &&
    css`
      margin: 0 0 30px;
      padding-left: 0;
    `}

            ${({ type }) =>
    type === 'orderSummary' &&
    css`
      margin-top: 30px;
    `}

      ${({ type }) =>
    type === 'accountPageWithoutSubheading' &&
    css`
      margin-top: 30px;
    `}

              ${({ type }) =>
    type === 'accountPage' &&
    css`
      margin-top: 30px;
      padding-left: 0;
    `} 

  @media (max-width: 768px) {
    margin: 30px 0;
    padding: 0;
    text-align: center;

    ${({ type }) =>
      type === 'mobileAuthBeforeCheckout' &&
      css`
        margin-bottom: -15px;
        padding-top: 30px;
      `}

    ${({ type }) =>
      type === 'mobileTopHeading' &&
      css`
        padding-top: 30px;
      `}

        ${({ type }) =>
      type === 'accountPageWithoutSubheading' &&
      css`
        padding-left: 80px;
        text-align: left;
      `}

                 ${({ type }) =>
      type === 'accountPage' &&
      css`
        text-align: left;
      `}
  }

  @media (max-width: 600px) {
    ${({ type }) =>
      type === 'accountPageWithoutSubheading' &&
      css`
        margin: 30px 0;
        padding: 0;
        text-align: center;
      `}

    ${({ type }) =>
      type === 'accountPage' &&
      css`
        text-align: center;
      `}
  }
`;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  ${({ type }) =>
    type === 'specialOffer' ||
    (type === 'productPage' &&
      css`
        font-size: ${({ theme }) => theme.fontSizes.xxl};
      `)}
`;

export const StyledHeadingDescription = styled.h3`
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
