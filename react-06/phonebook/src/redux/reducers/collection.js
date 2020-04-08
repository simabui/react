import { TYPE } from '../actions/phonebook';

export default function collectionUpdate(state = [], action) {
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
