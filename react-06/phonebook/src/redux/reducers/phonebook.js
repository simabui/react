import { TYPE } from '../actions/phonebook';

export default function collectionUpdate(
  state = {
    collection: [],
    filter: '',
  },
  action,
) {
  switch (action.type) {
    case TYPE.update: {
      // return new object with updated collection
      return { ...state, collection: [...state.collection, ...action.payload] };
    }

    case TYPE.filter: {
      // return new object with updated collection
      return { ...state, filter: action.payload };
    }

    case TYPE.delete: {
      return {
        ...state,
        collection: [
          ...state.collection.filter(contact => contact.id !== action.payload),
        ],
      };
    }

    default:
      return state;
  }
}
