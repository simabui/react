import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as TYPE from '../actions/phonebook';

const collectionReducer = createReducer([], {
  [TYPE.updateCollection]: (state, action) => [...state, ...action.payload],
  [TYPE.deleteUser]: (state, action) => [
    ...state.filter(contact => contact.id !== action.payload),
  ],
});

const filterReducer = createReducer('', {
  [TYPE.filterCollection]: (state, action) => action.payload,
});

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  filter: filterReducer,
});

export default collectionReducers;
