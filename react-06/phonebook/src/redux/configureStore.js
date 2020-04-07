import { createStore } from 'redux';
import reducers from './reducers/phonebook';

// create base store
export default function configureStore() {
  return createStore(reducers, {});
}
