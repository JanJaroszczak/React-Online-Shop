import { actionsTypes } from '../actions/actionsTypes';

const intitialState = {
  isSearchPanelOn: false,
};

const searchPanel = (state = intitialState, action) => {
  const { type } = action;

  switch (type) {
    case actionsTypes.TOGGLE_SEARCH_PANEL:
      return {
        ...state,
        isSearchPanelOn: !state.isSearchPanelOn,
      };

    default:
      return state;
  }
};

export default searchPanel;
