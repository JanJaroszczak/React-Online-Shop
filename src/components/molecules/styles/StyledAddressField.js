import styled from 'styled-components';

export const StyledAddress = styled.address`
  margin-top: 30px;
  padding-left: 80px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  } ;
`;
