import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max600 } = mediaQueryStrings;

export const StyledAccountMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

export const StyledAccountHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  border-right: 1px solid ${({ theme }) => theme.colors.midGray};

  @media ${max600} {
    border-right: none;
  }
`;

export const StyledNameLogoutWrapper = styled.div`
  max-width: 145px;
  align-self: center;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray};
    background-color: transparent;
    text-transform: uppercase;
    border: none;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;

export const StyledLink = styled(NavLink)`
  height: 40px;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 40px;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  border-right: 1px solid ${({ theme }) => theme.colors.midGray};

  &.active {
    color: ${({ theme }) => theme.colors.mainDark};
    border-right: none;
  }

  @media ${max600} {
    border-right: none;
  }
`;
