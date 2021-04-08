import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const StyledCartSummary = styled.div`
  width: 380px;
  margin: 40px 0 40px auto;

  /* border: 1px solid black; */

  ${({ variant }) =>
    variant === 'checkout' &&
    css`
      justify-self: center;
      margin: 123px 50px 0 0;
    `}

  ${({ orderSummary }) =>
    orderSummary &&
    css`
      margin: 0;
    `}

    @media (max-width: 768px) {
    width: auto;
    margin: 30px auto 0;
  }
`;

const StyledCartSummaryHeading = styled.h3`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const StyledListElement = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.declicateGray};

  /* border: 1px solid black; */

  ${({ total }) =>
    total &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.mainDark};
    `}
`;

const StyledButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border: none;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  @media (max-width: 768px) {
    margin: 20px auto 0;
  }
`;

const CartSummary = ({ variant, totalOrderPrice, orderSummary }) => {
  const totalPrice = useSelector(({ totalPrice }) => totalPrice);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  return (
    <StyledCartSummary variant={variant}>
      <StyledCartSummaryHeading>
        {orderSummary ? 'COSTS DETAILS' : 'CART SUMMARY'}
      </StyledCartSummaryHeading>
      <ul>
        <StyledListElement>
          PRODUCTS
          <span>$ {orderSummary ? totalOrderPrice : totalPrice}</span>
        </StyledListElement>
        <StyledListElement>
          SHIPPING
          <span>$ 10</span>
        </StyledListElement>
        <StyledListElement total>
          TOTAL
          <span>$ {orderSummary ? totalOrderPrice + 10 : totalPrice + 10}</span>
        </StyledListElement>
      </ul>
      {variant !== 'checkout' && !orderSummary && (
        <Link
          to={currentUser ? routes.checkout : routes.authbeforecheckout}
          style={{ textDecoration: 'none' }}
        >
          <StyledButton type="button">CHECKOUT</StyledButton>
        </Link>
      )}
    </StyledCartSummary>
  );
};

export default CartSummary;
