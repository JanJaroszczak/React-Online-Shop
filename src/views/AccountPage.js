import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import AccountMenu from '../components/organisms/AccountMenu';
import OrdersHistory from '../components/organisms/OrdersHistory';
import SingleOrderHistory from '../components/organisms/SingleOrderHistory';
import { routes } from '../routes';
import PasswordChange from '../components/organisms/PasswordChange';

const StyledAccountPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AccountPage = ({ history, match }) => {
  const currentUser = useSelector(({ currentUser }) => currentUser);
  const isCurrentUserChecked = useSelector(
    ({ isCurrentUserChecked }) => isCurrentUserChecked
  );

  console.log('current user:', currentUser);
  console.log('match:', match);
  console.log('history:', history);
  return (
    <StyledAccountPageWrapper>
      <AccountMenu />
      <div>
        {match.url === routes.accountOrders && <OrdersHistory />}
        {match.path === routes.accountOrder && (
          <SingleOrderHistory
            orderDate={history.location.state.orderDate}
            totalOrderPrice={history.location.state.totalOrderPrice}
            orderId={match.params.orderId}
          />
        )}
        {match.url === routes.passwordChange && <PasswordChange />}
      </div>
      {isCurrentUserChecked && !currentUser && <Redirect to={routes.home} />}
    </StyledAccountPageWrapper>
  );
};

export default AccountPage;
