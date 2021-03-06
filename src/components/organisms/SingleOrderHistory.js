import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../atoms/Button';
import CartContentTable from '../../components/organisms/CartContentTable';
import CartSummary from '../../components/molecules/CartSummary';
import Heading from '../../components/atoms/Heading';

import { buttonLabels } from '../../helpers/buttonLabels';
import {
  buttonVariants,
  headingTypes,
} from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';

import {
  StyledOrderSummaryWrapper,
  StyledLink,
} from './styles/StyledSingleOrderHistory';

const SingleOrderHistory = ({ orderDate, totalOrderPrice, orderId }) => {
  const currentUser = useSelector(({ user }) => user.currentUser);

  let orderToDisplay = null;

  if (currentUser) {
    orderToDisplay = currentUser.ordersHistory.filter(
      (order) => order.orderId === orderId
    );
  }

  return (
    <StyledOrderSummaryWrapper>
      {currentUser && (
        <>
          <Heading
            type={headingTypes.orderSummary}
            heading={'ORDER SUMMARY'}
            headingDescription={`DATE: ${orderDate}`}
          />
          <CartContentTable order={orderToDisplay} orderSummary />
          <CartSummary totalOrderPrice={totalOrderPrice} orderSummary />
        </>
      )}
      <StyledLink to={routes.accountOrders}>
        <Button
          variant={buttonVariants.noCapitalize}
          type="button"
          label={buttonLabels.goToAllOrdersHistory}
        />
      </StyledLink>
    </StyledOrderSummaryWrapper>
  );
};

export default SingleOrderHistory;
