import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsAndCart from '../reducers/productsAndCart';
import searchPanel from '../reducers/searchPanel';
import user from '../reducers/user';
import paymentAlert from '../reducers/paymentAlert';
import termsModal from '../reducers/termsModal';

const rootReducer = combineReducers({
  productsAndCart,
  searchPanel,
  user,
  paymentAlert,
  termsModal,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
