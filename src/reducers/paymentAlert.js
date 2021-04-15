import { actionsTypes } from '../actions/actionsTypes';

const intitialState = {
  successfulPaymentAlert: false,
};

const paymentAlert = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SUCCESSFUL_PAYMENT_ALERT:
      return {
        ...state,
        successfulPaymentAlert: payload,
      };
    default:
      return state;
  }
};

export default paymentAlert;
