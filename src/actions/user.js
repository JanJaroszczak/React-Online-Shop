import { actionsTypes } from './actionsTypes';

export const setCurrentUser = (user) => ({
  type: actionsTypes.SET_CURRENT_USER,
  payload: user,
});

export const currentUserChecked = (isChecked) => ({
  type: actionsTypes.CURRENT_USER_CHECKED,
  payload: isChecked,
});
