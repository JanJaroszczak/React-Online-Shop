import styled, { css } from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledWrapper = styled.div`
  ${({ beforeCheckout }) =>
    beforeCheckout &&
    css`
      padding: 0 10px;
    `}
`;

export const StyledButtonWrapper = styled.div`
  position: relative;
`;

export const StyledInputsWrapper = styled.div`
  @media ${mediaQueryStrings.max768} {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const StyledError = styled.div`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: red;
`;
