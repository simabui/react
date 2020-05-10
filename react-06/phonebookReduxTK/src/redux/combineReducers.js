import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  collectionReducer,
  filterReducer,
} from './phonebook/phonebookReducers';

const eventsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['collection'],
};

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  filter: filterReducer,
});

// main store
const rootReducer = combineReducers({
  phonebook: persistReducer(eventsPersistConfig, collectionReducers),
});

// create store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
