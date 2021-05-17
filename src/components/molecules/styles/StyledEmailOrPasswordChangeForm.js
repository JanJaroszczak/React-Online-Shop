import styled, { css } from 'styled-components';

export const StyledInputsWrapper = styled.div`
  @media (max-width: 600px) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const StyledError = styled.div`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: red;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;
