import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  collectionReducer,
  filterReducer,
} from './phonebook/phonebookReducers';

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  filter: filterReducer,
});

// main store
const rootReducer = combineReducers({
  phonebook: collectionReducers,
});

// create store
export default configureStore({ reducer: rootReducer });
