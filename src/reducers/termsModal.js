import { actionsTypes } from '../actions/actionsTypes';

const intitialState = {
  isTermsModalOpen: false,
};

const termsModal = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.IS_TERMS_MODAL_OPEN:
      return {
        ...state,
        isTermsModalOpen: payload,
      };
    default:
      return state;
  }
};

export default termsModal;
