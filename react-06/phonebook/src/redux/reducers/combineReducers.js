import { combineReducers } from 'redux';
import collectionReducers from './collection';
import filterReducers from './filter';

// store object
const rootReducer = combineReducers({
  collection: collectionReducers,
  filter: filterReducers,
});

export default rootReducer;
