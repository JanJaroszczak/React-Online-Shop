import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { auth } from '../../firebase/firebaseConfig';
import { clearCart } from '../../actions';
import { routes } from '../../routes';

import {
  StyledAccountMenuWrapper,
  StyledAccountHeading,
  StyledNameLogoutWrapper,
  StyledLink,
} from './styles/StyledAccountMenu';

const AccountMenu = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(({ user }) => user.currentUser);

  const { accountOrders, accountDetails, emailChange, passwordChange } = routes;

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
          {currentUser && <h3>{currentUser.userName}</h3>}
          <button onClick={logout} type="button">
            Log Out
          </button>
        </StyledNameLogoutWrapper>
      </StyledAccountHeading>
      <ul>
        <li>
          <StyledLink to={accountOrders}>orders history</StyledLink>
        </li>
        <li>
          <StyledLink to={accountDetails}>account details</StyledLink>
        </li>
        <li>
          <StyledLink to={emailChange}>email change</StyledLink>
        </li>
        <li>
          <StyledLink to={passwordChange}>password change</StyledLink>
        </li>
      </ul>
    </StyledAccountMenuWrapper>
  );
};

export default AccountMenu;
