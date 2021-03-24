import { actionsTypes } from './actionsTypes';

export const setCartOpen = () => ({
  type: actionsTypes.SET_CART_OPEN,
});

export const setCartClose = () => ({
  type: actionsTypes.SET_CART_CLOSE,
});

export const addProductToCart = (productId, chosenSize, chosenQuantity) => ({
  type: actionsTypes.ADD_PRODUCT_TO_CART,
  payload: { productId, chosenSize, chosenQuantity },
});

export const removeProductFromCart = (productId, cartProductId) => ({
  type: actionsTypes.REMOVE_PRODUCT_FROM_CART,
  payload: { productId, cartProductId },
});

export const decreaseProductCartQuantity = (productId, cartProductId) => ({
  type: actionsTypes.DECREASE_PRODUCT_CART_QUANTITY,
  payload: { productId, cartProductId },
});

export const closeNotInStockMessage = (cartProductId) => ({
  type: actionsTypes.CLOSE_NOT_IN_STOCK_MESSAGE,
  payload: cartProductId,
});

export const calculateCartTotals = () => ({
  type: actionsTypes.CALCULATE_CART_TOTALS,
});

export const setCurrentUser = (user) => ({
  type: actionsTypes.SET_CURRENT_USER,
  payload: user,
});

export const getProducts = (productsData) => ({
  type: actionsTypes.GET_PRODUCTS,
  payload: productsData,
});
