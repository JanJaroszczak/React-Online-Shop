import _ from 'lodash';

import { actionsTypes } from '../actions/actionsTypes';
import { productsData } from '../localData/productsData';

const intitialState = {
  cart: [],
  isCartOpen: false,
  products: [...productsData],
  counter: 0,
  totalPrice: 0,
  notInStockMessage: '',
};

const reducer = (state = intitialState, action) => {
  const { type, productId, cartProductId, chosenSize, chosenQuantity } = action;

  const productsCopy = _.cloneDeep(state.products);
  const cartCopy = _.cloneDeep(state.cart);

  switch (type) {
    case actionsTypes.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };

    case actionsTypes.SET_CART_CLOSE:
      return {
        ...state,
        isCartOpen: false,
      };

    case actionsTypes.ADD_PRODUCT_TO_CART:
      const foundMatchIndex = state.cart.findIndex(
        (product) =>
          product.productId === productId &&
          product.chosenOption.size === chosenSize
      );

      let chosenProductAvailableQuantity = null;
      let chosenProductSizeObjectReference = null;

      productsCopy.map((product) => {
        if (product.productId === productId) {
          product.sizes.map((size) => {
            if (size.size === chosenSize) {
              chosenProductAvailableQuantity = size.availableQuantity;
              chosenProductSizeObjectReference = size;
            }
            return size;
          });
        }
        return product;
      });

      if (chosenProductAvailableQuantity < chosenQuantity)
        return {
          ...state,
          notInStockMessage: 'notInStock',
        };

      if (foundMatchIndex >= 0) {
        cartCopy[foundMatchIndex].chosenOption.quantity =
          cartCopy[foundMatchIndex].chosenOption.quantity + chosenQuantity;

        chosenProductSizeObjectReference.availableQuantity =
          chosenProductSizeObjectReference.availableQuantity - chosenQuantity;

        return {
          ...state,
          products: productsCopy,
          cart: cartCopy,
          counter: state.counter + 1 * chosenQuantity,
          totalPrice:
            state.totalPrice +
            cartCopy[foundMatchIndex].productPrice * chosenQuantity,
        };
      } else {
        const chosenProduct = _.cloneDeep(productsCopy).find(
          (product) => product.productId === productId
        );
        chosenProduct.cartProductId = `${chosenProduct.productId}_${chosenSize}`;
        chosenProduct.chosenOption = {};
        chosenProduct.chosenOption.size = chosenSize;
        chosenProduct.chosenOption.quantity = chosenQuantity;

        chosenProductSizeObjectReference.availableQuantity =
          chosenProductSizeObjectReference.availableQuantity - chosenQuantity;

        return {
          ...state,
          products: productsCopy,
          cart: [...state.cart, chosenProduct],
          counter: state.counter + 1 * chosenQuantity,
          totalPrice:
            state.totalPrice + chosenProduct.productPrice * chosenQuantity,
        };
      }

    case actionsTypes.REMOVE_PRODUCT_FROM_CART:
      const cartAfterRemoval = state.cart.filter(
        (product) => product.cartProductId !== cartProductId
      );

      const removedProduct = state.cart.find(
        (product) => product.cartProductId === cartProductId
      );

      productsCopy.map((product) => {
        if (product.productId === productId) {
          product.sizes.map((size) => {
            if (size.size === removedProduct.chosenOption.size) {
              size.availableQuantity =
                size.availableQuantity + removedProduct.chosenOption.quantity;
            }
            return size;
          });
        }
        return product;
      });

      return {
        ...state,
        products: productsCopy,
        cart: cartAfterRemoval,
        counter: state.counter - 1 * removedProduct.chosenOption.quantity,
        totalPrice:
          state.totalPrice -
          removedProduct.productPrice * removedProduct.chosenOption.quantity,
      };

    case actionsTypes.DECREASE_PRODUCT_CART_QUANTITY:
      let handledProduct = null;
      let decreaseNotPossibleFlag = false;

      const updatedCart = cartCopy.map((product) => {
        if (product.cartProductId === cartProductId) {
          handledProduct = product;
          if (product.chosenOption.quantity > 1) {
            product.chosenOption.quantity = product.chosenOption.quantity - 1;
          } else {
            decreaseNotPossibleFlag = true;
          }
        }
        return product;
      });

      productsCopy.map((product) => {
        if (product.productId === productId) {
          product.sizes.map((size) => {
            if (size.size === handledProduct.chosenOption.size) {
              size.availableQuantity = size.availableQuantity + 1;
            }
            return size;
          });
        }
        return product;
      });

      if (decreaseNotPossibleFlag) return state;

      return {
        ...state,
        products: productsCopy,
        cart: updatedCart,
        counter: state.counter - 1,
        totalPrice: state.totalPrice - handledProduct.productPrice,
      };

    case actionsTypes.CLOSE_NOT_IN_STOCK_MESSAGE:
      return {
        ...state,
        notInStockMessage: '',
      };

    default:
      return state;
  }
};

export default reducer;
