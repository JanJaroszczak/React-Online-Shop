import styled from 'styled-components';

export const StyledQuestion = styled.h2`
  margin: 10px 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
