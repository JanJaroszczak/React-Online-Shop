import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  updateProductQuantityInFirestore,
  addOrderToOrderHistory,
} from '../../firebase/firestoreUtils';
import { routes } from '../../routes';
import { successfulPaymentAlert } from '../../actions';

import { StyledPayPalButtonsWrapper } from './styles/StyledPayPal';

export default function Paypal() {
  const [redirectToOrderSummary, setRedirectToOrderSummary] = useState(false);

  const paypal = useRef();
  const totalPrice = useSelector(
    ({ productsAndCart }) => productsAndCart.totalPrice
  );
  const cart = useSelector(({ productsAndCart }) => productsAndCart.cart);
  const products = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );
  const currentUser = useSelector(({ user }) => user.currentUser);

  const cartCopy = _.cloneDeep(cart);
  const totalPriceCopy = totalPrice;

  const { userId } = currentUser;

  const dispatch = useDispatch();

  useEffect(() => {
    setRedirectToOrderSummary(false);
  }, []);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool Cleats Shop order',
                amount: {
                  currency_code: 'USD',
                  value: 1,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          // const paypalOrder = await actions.order.capture();
          // console.log(paypalOrder);
          // console.log(data);

          // const order = {
          //   clientDetails: {},
          //   products: [],
          // };
          const productsInCartId = cart.map((product) => product.productId);

          products.forEach((product) => {
            const { productId, sizes } = product;

            if (productsInCartId.includes(productId)) {
              updateProductQuantityInFirestore(productId, sizes);
            }
          });

          addOrderToOrderHistory(cartCopy, userId);

          dispatch(successfulPaymentAlert(true));
          setRedirectToOrderSummary(true);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <StyledPayPalButtonsWrapper>
      <div ref={paypal}></div>
      {redirectToOrderSummary && (
        <Redirect
          to={{
            pathname: routes.ordersummary,
            state: { cart: cartCopy, totalPrice: totalPriceCopy },
          }}
        />
      )}
    </StyledPayPalButtonsWrapper>
  );
}
