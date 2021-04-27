import styled from 'styled-components';

export const StyledTermsButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.link};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border: none;
  background-color: transparent;
`;
