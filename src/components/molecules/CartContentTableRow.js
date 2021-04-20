import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
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

  const currentCart = useSelector(
    ({ productsAndCart }) => productsAndCart.cart
  );
  const currentProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

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

  const removeFromCart = () => {
    const cartCopy = _.cloneDeep(currentCart);
    const productsCopy = _.cloneDeep(currentProducts);

    const cartAfterRemoval = cartCopy.filter(
      (cartProductCopy) =>
        cartProductCopy.cartProductId !== product.cartProductId
    );

    const removedProduct = cartCopy.find(
      (cartProductCopy) =>
        cartProductCopy.cartProductId === product.cartProductId
    );

    productsCopy.forEach((productCopy) => {
      if (productCopy.productId === product.productId) {
        productCopy.sizes.forEach((size) => {
          if (size.size === removedProduct.chosenOption.size) {
            size.availableQuantity =
              size.availableQuantity + removedProduct.chosenOption.quantity;
          }
        });
      }
    });

    dispatch(removeProductFromCart(productsCopy, cartAfterRemoval));
  };

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
            <i className="fas fa-times" onClick={removeFromCart}></i>
          )}
        </StyledPrice>
      </td>
    </StyledTableRow>
  );
};

export default CartContentTableRow;
