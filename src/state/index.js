import createSagaMiddleware from "redux-saga";
import { save, load } from 'redux-localstorage-simple'
import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import application from './application/reducer';
import wallet from './wallet/wallet.reducer';
import walletSaga from './wallet/wallet.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  application,
  wallet
});

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f),
);
sagaMiddleware.run(walletSaga);

export default store