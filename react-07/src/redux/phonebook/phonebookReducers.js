import { TYPE } from './phonebookActions';

export function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.getSuccess: {
      return [...action.payload.users];
    }

    case TYPE.updateSuccess: {
      return [...state, action.payload.user];
    }

    case TYPE.deleteSuccess: {
      return [...state.filter(contact => contact.id !== action.payload.id)];
    }

    default:
      return state;
  }
}

export function filterReducer(state = '', action) {
  switch (action.type) {
    case TYPE.filter: {
      // return new object with updated collection
      return action.payload.text;
    }

    default:
      return state;
  }
}

export function errorReducer(state = null, action) {
  switch (action.type) {
    case TYPE.getFail:
    case TYPE.updateFail:
    case TYPE.deleteFail: {
      return action.payload.error;
    }

    default:
      return state;
  }
}
