import { actionsTypes } from '../actions/actionsTypes';
import { productsData } from '../localData/productsData';

const intitialState = {
  cart: [],
  isCartOpen: false,
  products: [...productsData],
  counter: 0,
  totalPrice: 0,
};

const reducer = (state = intitialState, action) => {
  const { type, payload } = action;

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
      const choosenProduct = state.products.find(
        (product) => product.productId === payload
      );

      // const cartProductsPrices = state.cart.map(product => product.productPrice);

      return {
        ...state,
        cart: [...state.cart, choosenProduct],
        counter: state.counter + 1,
        totalPrice: state.totalPrice + choosenProduct.productPrice,
      };

    case actionsTypes.REMOVE_PRODUCT_FROM_CART:
      const cartAfterRemoval = state.cart.filter(
        (product) => product.productId !== payload
      );

      const removedPoduct = state.products.find(
        (product) => product.productId === payload
      );

      return {
        ...state,
        cart: cartAfterRemoval,
        counter: state.counter - 1,
        totalPrice: state.totalPrice - removedPoduct.productPrice,
      };

    default:
      return state;
  }
};

export default reducer;
