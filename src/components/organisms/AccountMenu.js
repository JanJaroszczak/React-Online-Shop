import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { routes } from '../../routes';
import { auth } from '../../firebase/firebaseConfig';
import { clearCart } from '../../actions';
import {
  StyledAccountMenuWrapper,
  StyledAccountHeading,
  StyledNameLogoutWrapper,
  StyledLink,
} from './styles/StyledAccountMenu';

const AccountMenu = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(({ user }) => user.currentUser);

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
