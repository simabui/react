import { combineReducers } from 'redux';
import {
  collectionReducer,
  filterReducer,
  errorReducer,
} from './phonebook/phonebookReducers';

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  filter: filterReducer,
  error: errorReducer,
});

// root reducer
const rootReducer = combineReducers({
  phonebook: collectionReducers,
});

export default rootReducer;
