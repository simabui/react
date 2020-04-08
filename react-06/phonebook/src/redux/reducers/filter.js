import { TYPE } from '../actions/phonebook';

export default function filterCollection(state = '', action) {
  switch (action.type) {
    case TYPE.filter: {
      // return new object with updated collection
      return action.payload;
    }

    default:
      return state;
  }
}
