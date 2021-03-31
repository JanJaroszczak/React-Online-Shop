import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  addProductToCart,
  decreaseProductCartQuantity,
  closeNotInStockMessage,
  removeProductFromCart,
} from '../../actions';

import CartElementInfo from '../atoms/CartElementInfo';
import {
  StyledQuantityChoice,
  StyledQuantityInput,
} from './styles/StyledQuantitySelector';

const StyledTableRow = styled.tr`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  td .gridWrapper {
    display: grid;
    grid-template-columns: 100px auto;

    /* border: 1px solid black; */
  }
`;

const StyledPrice = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  /* border: 1px solid black; */

  i {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  i:hover {
    color: ${({ theme }) => theme.colors.extraDarkGray};
  }
`;

const CartContentTableRow = ({ product, orderRow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNotInStockMessage(product.cartProductId));
  }, []);

  useEffect(() => {
    if (product.notInStock !== '') {
      setTimeout(() => {
        dispatch(closeNotInStockMessage(product.cartProductId));
      }, 2000);
    }
  }, [product.notInStock, product.cartProductId, dispatch]);

  return (
    <StyledTableRow>
      <td>
        <div className="gridWrapper">
          <CartElementInfo product={product} />
        </div>
      </td>
      <td>
        <StyledQuantityChoice cart>
          <StyledQuantityInput cart>
            {!orderRow && (
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    decreaseProductCartQuantity(
                      product.productId,
                      product.cartProductId
                    )
                  )
                }
              >
                -
              </button>
            )}
            <input
              id="quantity"
              type="number"
              value={product.chosenOption.quantity}
              readOnly
            />
            {!orderRow && (
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addProductToCart(
                      product.productId,
                      product.chosenOption.size,
                      1
                    )
                  )
                }
                className={`${product.notInStock}`}
              >
                +
              </button>
            )}
          </StyledQuantityInput>
        </StyledQuantityChoice>
      </td>
      <td>
        <StyledPrice>
          $ {product.chosenOption.quantity * product.productPrice}
          {!orderRow && (
            <i
              className="fas fa-times"
              onClick={() =>
                dispatch(
                  removeProductFromCart(
                    product.productId,
                    product.cartProductId
                  )
                )
              }
            ></i>
          )}
        </StyledPrice>
      </td>
    </StyledTableRow>
  );
};

export default CartContentTableRow;
