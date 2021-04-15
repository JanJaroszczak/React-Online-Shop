import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  /* border: 1px solid black; */

  ${({ beforeCheckout }) =>
    beforeCheckout &&
    css`
      padding: 0 10px;
    `}
`;

export const StyledButtonWrapper = styled.div`
  position: relative;
  /* border: 1px solid black; */
`;

export const StyledInputsWrapper = styled.div`
  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto;
  }

  /* border: 1px solid black; */
`;

export const StyledError = styled.div`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: red;
`;
