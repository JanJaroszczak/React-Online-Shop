import { actionsTypes } from './actionsTypes';

export const isTermsModalOpen = (isOn) => ({
  type: actionsTypes.IS_TERMS_MODAL_OPEN,
  payload: isOn,
});
