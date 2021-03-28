import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';
import { auth } from '../../firebase/firebaseConfig';

const StyledAccountMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  /* border: 1px solid black; */
`;

const StyledAccountHeading = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  border-right: 1px solid ${({ theme }) => theme.colors.midGray};

  /* border: 1px solid black; */

  i {
    margin: 0 10px;
    align-self: center;
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const StyledNameLogoutWrapper = styled.div`
  align-self: center;

  /* border: 1px solid black; */

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.l};
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

const StyledLink = styled(NavLink)`
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

  /* border: 1px solid black; */

  &.active {
    color: ${({ theme }) => theme.colors.mainDark};
    border-right: none;
  }
`;

const AccountMenu = () => {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledAccountMenuWrapper>
      <StyledAccountHeading>
        <i className="fas fa-user-circle"></i>
        <StyledNameLogoutWrapper>
          <h3>Tomek</h3>
          <button onClick={logout} type="button">
            Log Out
          </button>
        </StyledNameLogoutWrapper>
      </StyledAccountHeading>
      <ul>
        <li>
          <StyledLink to={routes.accountOrders}>orders</StyledLink>
        </li>
        <li>
          <StyledLink to={routes.accountAddresses}>addresses</StyledLink>
        </li>
        <li>
          <StyledLink to={routes.accountDetails}>account details</StyledLink>
        </li>
      </ul>
    </StyledAccountMenuWrapper>
  );
};

export default AccountMenu;
