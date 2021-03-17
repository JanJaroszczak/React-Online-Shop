import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';
import { saveState, loadState } from './localStorage';

const store = createStore(reducer, loadState(), composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
