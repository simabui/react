import { combineReducers } from 'redux';
import { TYPE } from '../actions/phonebook';

function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.update: {
      // return new object with updated collection
      return [...state, ...action.payload];
    }

    case TYPE.delete: {
      return [...state.filter(contact => contact.id !== action.payload)];
    }

    default:
      return state;
  }
}

function filterReducer(state = '', action) {
  switch (action.type) {
    case TYPE.filter: {
      // return new object with updated collection
      return action.payload;
    }

    default:
      return state;
  }
}

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  filter: filterReducer,
});

export default collectionReducers;
