import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsAndCart from '../reducers/productsAndCart';
import searchPanel from '../reducers/searchPanel';
import user from '../reducers/user';
import paymentAlert from '../reducers/paymentAlert';

const rootReducer = combineReducers({
  productsAndCart,
  searchPanel,
  user,
  paymentAlert,
});

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
