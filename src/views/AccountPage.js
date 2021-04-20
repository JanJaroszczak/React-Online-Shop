import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AccountDetails from '../components/organisms/AccountDetails';
import AccountMenu from '../components/organisms/AccountMenu';
import EmailChange from '../components/organisms/EmailChange';
import OrdersHistory from '../components/organisms/OrdersHistory';
import PasswordChange from '../components/organisms/PasswordChange';
import SingleOrderHistory from '../components/organisms/SingleOrderHistory';

import { routes } from '../routes';

import { StyledAccountPageWrapper } from './styles/StyledAccountPage';

const AccountPage = ({ history, match }) => {
  const currentUser = useSelector(({ user }) => user.currentUser);
  const isCurrentUserChecked = useSelector(
    ({ user }) => user.isCurrentUserChecked
  );

  console.log('current user:', currentUser);
  console.log('match:', match);
  console.log('history:', history);

  const renderAccountSubPage = () => (
    <>
      <div>
        {match.url === routes.accountOrders && <OrdersHistory />}
        {match.path === routes.accountOrder && (
          <SingleOrderHistory
            orderDate={history.location.state.orderDate}
            totalOrderPrice={history.location.state.totalOrderPrice}
            orderId={match.params.orderId}
          />
        )}
        {match.url === routes.accountDetails && <AccountDetails />}
        {match.url === routes.emailChange && <EmailChange />}
        {match.url === routes.passwordChange && <PasswordChange />}
      </div>
    </>
  );

  return (
    <StyledAccountPageWrapper>
      <AccountMenu />
      {renderAccountSubPage()}
      {isCurrentUserChecked && !currentUser && <Redirect to={routes.home} />}
    </StyledAccountPageWrapper>
  );
};

export default AccountPage;
