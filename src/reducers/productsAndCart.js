import _ from 'lodash';

import { actionsTypes } from '../actions/actionsTypes';

const intitialState = {
  cart: [],
  isCartOpen: false,
  products: [],
  counter: 0,
  totalPrice: 0,
};

const productsAndCart = (state = intitialState, action) => {
  const { type, payload } = action;

  const productsCopy = _.cloneDeep(state.products);
  const cartCopy = _.cloneDeep(state.cart);

  switch (type) {
    case actionsTypes.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };

    case actionsTypes.SET_CART_CLOSED:
      return {
        ...state,
        isCartOpen: false,
      };

    case actionsTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: payload.productsCopy,
        cart: payload.cartAfterRemoval,
      };

    case actionsTypes.CLOSE_NOT_IN_STOCK_MESSAGE:
      cartCopy.forEach((product) => {
        if (product.cartProductId === payload) {
          product.notInStock = '';
        }
      });

      return {
        ...state,
        cart: cartCopy,
      };

    case actionsTypes.CALCULATE_CART_TOTALS:
      let totalPriceCounter = 0;
      let cartProductsCounter = 0;

      state.cart.forEach((product) => {
        cartProductsCounter =
          cartProductsCounter + product.chosenOption.quantity;
        totalPriceCounter =
          totalPriceCounter +
          product.chosenOption.quantity * product.productPrice;
      });

      return {
        ...state,
        counter: cartProductsCounter,
        totalPrice: totalPriceCounter,
      };

    case actionsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case actionsTypes.GET_CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cart: payload,
      };

    case actionsTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case actionsTypes.DECREASE_PRODUCT_CART_QUANTITY:
      let handledProduct = null;
      let decreaseNotPossibleFlag = false;

      cartCopy.forEach((product) => {
        if (product.cartProductId === payload.cartProductId) {
          handledProduct = product;
          if (product.chosenOption.quantity > 1) {
            product.chosenOption.quantity = product.chosenOption.quantity - 1;
          } else {
            decreaseNotPossibleFlag = true;
          }
        }
      });

      productsCopy.forEach((product) => {
        if (product.productId === payload.productId) {
          product.sizes.forEach((size) => {
            if (size.size === handledProduct.chosenOption.size) {
              size.availableQuantity = size.availableQuantity + 1;
            }
          });
        }
      });

      if (decreaseNotPossibleFlag) return state;

      return {
        ...state,
        products: productsCopy,
        cart: cartCopy,
      };

    case actionsTypes.ADD_PRODUCT_TO_CART:
      const foundMatchIndex = state.cart.findIndex(
        (product) =>
          product.productId === payload.productId &&
          product.chosenOption.size === payload.chosenSize
      );

      let chosenProductAvailableQuantity = null;
      let chosenProductSizeObjectReference = null;

      productsCopy.forEach((product) => {
        if (product.productId === payload.productId) {
          product.sizes.forEach((size) => {
            if (size.size === payload.chosenSize) {
              chosenProductAvailableQuantity = size.availableQuantity;
              chosenProductSizeObjectReference = size;
            }
          });
        }
      });

      if (chosenProductAvailableQuantity < payload.chosenQuantity) {
        cartCopy[foundMatchIndex].notInStock = 'notInStock';

        return {
          ...state,
          cart: cartCopy,
        };
      }

      if (foundMatchIndex >= 0) {
        cartCopy[foundMatchIndex].chosenOption.quantity =
          cartCopy[foundMatchIndex].chosenOption.quantity +
          payload.chosenQuantity;

        chosenProductSizeObjectReference.availableQuantity =
          chosenProductSizeObjectReference.availableQuantity -
          payload.chosenQuantity;

        return {
          ...state,
          products: productsCopy,
          cart: cartCopy,
        };
      } else {
        const chosenProduct = _.cloneDeep(productsCopy).find(
          (product) => product.productId === payload.productId
        );
        chosenProduct.cartProductId = `${chosenProduct.productId}_${payload.chosenSize}`;
        chosenProduct.notInStock = '';
        chosenProduct.chosenOption = {};
        chosenProduct.chosenOption.size = payload.chosenSize;
        chosenProduct.chosenOption.quantity = payload.chosenQuantity;

        chosenProductSizeObjectReference.availableQuantity =
          chosenProductSizeObjectReference.availableQuantity -
          payload.chosenQuantity;

        return {
          ...state,
          products: productsCopy,
          cart: [...state.cart, chosenProduct],
        };
      }

    default:
      return state;
  }
};

export default productsAndCart;
