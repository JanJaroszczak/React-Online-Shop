import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledModalElementWrapper = styled.div`
  &.active,
  &:hover {
    background: ${({ searchModal }) =>
      searchModal ? 'rgb(227, 227, 227)' : 'transparent'};
  }

  &:hover {
    cursor: ${({ searchModal }) => (searchModal ? 'pointer' : 'inherit')};
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  outline: none;
`;

export const StyledModalSubElementWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 100px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledPrice = styled.div`
  align-self: center;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  /* border: 1px solid black; */
`;
