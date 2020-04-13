import { createReducer } from '@reduxjs/toolkit';
import * as TYPE from './phonebookActions';

export const collectionReducer = createReducer([], {
  [TYPE.updateCollection]: (state, action) => [...state, ...action.payload],
  [TYPE.deleteUser]: (state, action) => [
    ...state.filter(contact => contact.id !== action.payload),
  ],
});

export const filterReducer = createReducer('', {
  [TYPE.filterCollection]: (state, action) => action.payload,
});
