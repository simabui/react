import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/combineReducers';

// create base store
function configureStore(reducers) {
  // add extention as 3rd parameter
  return createStore(reducers, devToolsEnhancer());
}

export default configureStore(rootReducer);
