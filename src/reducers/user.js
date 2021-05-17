import { actionsTypes } from '../actions/actionsTypes';

const intitialState = {
  currentUser: null,
  isCurrentUserChecked: null,
};

const user = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case actionsTypes.CURRENT_USER_CHECKED:
      return {
        ...state,
        isCurrentUserChecked: payload,
      };

    default:
      return state;
  }
};

export default user;
