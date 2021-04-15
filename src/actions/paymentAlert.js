import { actionsTypes } from './actionsTypes';

export const successfulPaymentAlert = (isOn) => ({
  type: actionsTypes.SUCCESSFUL_PAYMENT_ALERT,
  payload: isOn,
});
