import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { routes } from '../../routes';
import { auth } from '../../firebase/firebaseConfig';
import { clearCart } from '../../actions';

const StyledAccountMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  /* border: 1px solid black; */
`;

const StyledAccountHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  border-right: 1px solid ${({ theme }) => theme.colors.midGray};

  /* border: 1px solid black; */

  @media (max-width: 600px) {
    border-right: none;
  }
`;

const StyledNameLogoutWrapper = styled.div`
  max-width: 145px;
  align-self: center;

  /* border: 1px solid black; */

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    /* border: 1px solid black; */
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

  @media (max-width: 600px) {
    border-right: none;
  }
`;

const AccountMenu = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(({ currentUser }) => currentUser);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signed out');
        dispatch(clearCart());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledAccountMenuWrapper>
      <StyledAccountHeading>
        <StyledNameLogoutWrapper>
          <h3>{currentUser.userName}</h3>
          <button onClick={logout} type="button">
            Log Out
          </button>
        </StyledNameLogoutWrapper>
      </StyledAccountHeading>
      <ul>
        <li>
          <StyledLink to={routes.accountOrders}>orders history</StyledLink>
        </li>
        <li>
          <StyledLink to={routes.accountDetails}>account details</StyledLink>
        </li>
        <li>
          <StyledLink to={routes.emailChange}>email change</StyledLink>
        </li>
        <li>
          <StyledLink to={routes.passwordChange}>password change</StyledLink>
        </li>
      </ul>
    </StyledAccountMenuWrapper>
  );
};

export default AccountMenu;
