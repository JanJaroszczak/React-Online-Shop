import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledPayPalButtonsWrapper = styled.div`
  padding-top: 15px;
`;

export default function Paypal() {
  const paypal = useRef();
  const totalPrice = useSelector(({ totalPrice }) => totalPrice);

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
                  value: `${totalPrice}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [totalPrice]);

  return (
    <StyledPayPalButtonsWrapper>
      <div ref={paypal}></div>
    </StyledPayPalButtonsWrapper>
  );
}
