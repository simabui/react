import { combineReducers } from 'redux';
import collectionReducers from './phonebook';

// store object
const rootReducer = combineReducers({
  phonebook: collectionReducers,
});

export default rootReducer;
