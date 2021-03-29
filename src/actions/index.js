import { actionsTypes } from './actionsTypes';

export const setCartOpen = () => ({
  type: actionsTypes.SET_CART_OPEN,
});

export const setCartClosed = () => ({
  type: actionsTypes.SET_CART_CLOSED,
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

export const getProducts = (alignedProductsData) => ({
  type: actionsTypes.GET_PRODUCTS,
  payload: alignedProductsData,
});

export const alignProductsAndCart = (productsData, cart) => {
  return (dispatch) => {
    console.log(cart);
    if (cart.length > 0) {
      console.log('alignment ON');
      const productsInCart = cart.map((product) => [
        product.productId,
        product.chosenOption.size,
        product.chosenOption.quantity,
      ]);

      productsInCart.forEach((cartProduct) => {
        productsData.forEach((dbProduct) => {
          const { productId, sizes } = dbProduct;

          if (cartProduct[0] === productId) {
            sizes.forEach((size) => {
              if (size.size === cartProduct[1]) {
                size.availableQuantity =
                  size.availableQuantity - cartProduct[2];
              }
            });
          }
        });
      });
    }
    dispatch(getProducts(productsData));
  };
};

export const getCartFromLocalStorage = (cartData) => ({
  type: actionsTypes.GET_CART_FROM_LOCAL_STORAGE,
  payload: cartData,
});

export const clearCart = () => ({
  type: actionsTypes.CLEAR_CART,
});

export const successfulPaymentAlert = (isOn) => ({
  type: actionsTypes.SUCCESSFUL_PAYMENT_ALERT,
  payload: isOn,
});
