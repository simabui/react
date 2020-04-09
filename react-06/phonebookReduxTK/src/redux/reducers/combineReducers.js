import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import collectionReducers from './phonebook';

// store object
const rootReducer = combineReducers({
  phonebook: collectionReducers,
});

// create store
export default configureStore({ reducer: rootReducer });
