import { actionsTypes } from './actionsTypes';

export const setCartOpen = () => ({
  type: actionsTypes.SET_CART_OPEN,
});

export const setCartClose = () => ({
  type: actionsTypes.SET_CART_CLOSE,
});

export const addProductToCart = (productId, chosenSize, chosenQuantity) => ({
  type: actionsTypes.ADD_PRODUCT_TO_CART,
  productId,
  chosenSize,
  chosenQuantity,
});

export const removeProductFromCart = (productId, cartProductId) => ({
  type: actionsTypes.REMOVE_PRODUCT_FROM_CART,
  productId,
  cartProductId,
});

export const decreaseProductCartQuantity = (productId, cartProductId) => ({
  type: actionsTypes.DECREASE_PRODUCT_CART_QUANTITY,
  productId,
  cartProductId,
});

export const closeNotInStockMessage = () => ({
  type: actionsTypes.CLOSE_NOT_IN_STOCK_MESSAGE,
});
