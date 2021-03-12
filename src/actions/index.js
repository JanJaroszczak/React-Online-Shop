import { actionsTypes } from './actionsTypes';

export const setCartOpen = () => ({
  type: actionsTypes.SET_CART_OPEN,
});

export const setCartClose = () => ({
  type: actionsTypes.SET_CART_CLOSE,
});

export const addProductToCart = (productId) => ({
  type: actionsTypes.ADD_PRODUCT_TO_CART,
  payload: productId,
});

export const removeProductFromCart = (productId) => ({
  type: actionsTypes.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});
