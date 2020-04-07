import { TYPE } from '../actions/phonebook';

// FIXME:  type filter
export default function collectionUpdate(
  state = {
    // base states
    collection: [],
    filter: '',
  },
  action,
) {
  switch (action.type) {
    case TYPE.update: {
      return [...state.collection, action.payload];
    }

    default:
      return state;
  }
}
