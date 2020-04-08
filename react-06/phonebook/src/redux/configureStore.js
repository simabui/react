import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// create base store

export default function configureStore(reducers) {
  // add extention as 3rd parameter
  return createStore(
    reducers,
    {
      collection: [],
      filter: '',
    },
    devToolsEnhancer(),
  );
}
