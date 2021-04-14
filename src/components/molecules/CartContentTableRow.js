import React, { useEffect } from 'react';
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
import {
  StyledTableRow,
  StyledPrice,
} from './styles/StyledCartContentTableRow';

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
          <StyledQuantityInput cart orderRow={orderRow}>
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
                <span style={{ fontWeight: '700' }}>-</span>
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
