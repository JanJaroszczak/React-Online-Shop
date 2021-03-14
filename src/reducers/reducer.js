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
  const { type, productId, chosenSize, chosenQuantity } = action;

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

      console.log(foundMatchIndex);

      if (foundMatchIndex >= 0) {
        const cartCopy = [...state.cart];

        // const cutProduct = newCart.splice(foundMatchIndex, 1);

        cartCopy[foundMatchIndex].chosenOption.quantity =
          cartCopy[foundMatchIndex].chosenOption.quantity + chosenQuantity;

        return {
          ...state,
          cart: cartCopy,
          counter: state.counter + 1 * chosenQuantity,
          totalPrice:
            state.totalPrice +
            cartCopy[foundMatchIndex].productPrice * chosenQuantity,
        };
      } else {
        const productsCopy = [...state.products];

        const chosenProduct = productsCopy.find(
          (product) => product.productId === productId
        );

        chosenProduct.chosenOption = {};
        chosenProduct.chosenOption.size = chosenSize;
        chosenProduct.chosenOption.quantity = chosenQuantity;

        // chosenProduct.chosenOption.size = chosenSize;
        // chosenProduct.chosenOption.quantity = chosenQuantity;
        return {
          ...state,
          cart: [...state.cart, chosenProduct],
          counter: state.counter + 1 * chosenQuantity,
          totalPrice:
            state.totalPrice + chosenProduct.productPrice * chosenQuantity,
        };
        // debugger;
      }
    // const cartProductsPrices = state.cart.map(product => product.productPrice);

    case actionsTypes.REMOVE_PRODUCT_FROM_CART:
      const cartAfterRemoval = state.cart.filter(
        (product) => product.productId !== productId
      );

      const removedPoduct = state.products.find(
        (product) => product.productId === productId
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
