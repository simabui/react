import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './combineReducers';

// middleWare
const middleWare = [ReduxThunk];
const enhancer = applyMiddleware(...middleWare);

// create base store
function configureStore(reducers) {
  // add extention as 3rd parameter
  return createStore(reducers, composeWithDevTools(enhancer));
}

const store = configureStore(rootReducer);

export default store;
