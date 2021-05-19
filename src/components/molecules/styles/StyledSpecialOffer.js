import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  position: relative;
  height: 165px;
  margin: 60px auto;
  padding: 0px 100px;
  border: 1px solid ${({ theme }) => theme.colors.moderateGray};

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 1px solid ${({ theme }) => theme.colors.moderateGray};
  }

  @media ${mediaQueryStrings.max768} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
    margin: 0 auto 60px;
    padding: 0;
    padding-bottom: 30px;
    text-align: center;
  } ;
`;

export const StyledLink = styled(Link)`
  align-self: center;
  justify-self: center;
  text-decoration: none;
`;
