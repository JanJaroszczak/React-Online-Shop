import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledAddress = styled.address`
  margin-top: 30px;
  padding-left: 80px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media ${mediaQueryStrings.max768} {
    padding: 0;
    text-align: center;
  } ;
`;
