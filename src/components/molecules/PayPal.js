import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateProductQuantityInFirestore } from '../../firebase/firestoreUtils';
import { clearCart } from '../../actions';

const StyledPayPalButtonsWrapper = styled.div`
  padding-top: 15px;
`;

export default function Paypal() {
  const paypal = useRef();
  const totalPrice = useSelector(({ totalPrice }) => totalPrice);
  const cart = useSelector(({ cart }) => cart);
  const products = useSelector(({ products }) => products);

  const dispatch = useDispatch();

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

          console.log(cart);

          console.log(products);

          const productsInCartId = cart.map((product) => product.productId);

          products.forEach((product) => {
            const { productId, sizes } = product;

            if (productsInCartId.includes(productId)) {
              updateProductQuantityInFirestore(productId, sizes);
            }
          });

          dispatch(clearCart());

          // updateProductQuantityInFirestore
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [totalPrice, cart, products, dispatch]);

  return (
    <StyledPayPalButtonsWrapper>
      <div ref={paypal}></div>
    </StyledPayPalButtonsWrapper>
  );
}
