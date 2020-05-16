export const TYPE = {
  getStart: 'phonebook/CONTACTS_GET_START',
  getSuccess: 'phonebook/CONTACTS_GET_SUCCESS',
  getFail: 'phonebook/CONTACTS_GET_FAIL',
  updateStart: 'phonebook/CONTACTS_UPDATE_START',
  updateSuccess: 'phonebook/CONTACTS_UPDATE_SUCCESS',
  updateFail: 'phonebook/CONTACTS_UPDATE_FAIL',
  filter: 'phonebook/FILTER_CONTACTS',
  deleteStart: 'phonebook/DELETE_USER_START',
  deleteSuccess: 'phonebook/DELETE_USER_SUCCESS',
  deleteFail: 'phonebook/DELETE_USER_FAIL',
};

/* GET */
export function getCollectionStart() {
  return {
    type: TYPE.getStart,
  };
}
export function getCollectionSuccess(users) {
  return {
    type: TYPE.getSuccess,
    // update arr of objs
    payload: { users },
  };
}
export function getCollectionFail(error) {
  return {
    type: TYPE.getFail,
    // update arr of objs
    payload: { error },
  };
}

/* PUT  */

export function updateCollectionStart() {
  return {
    type: TYPE.updateStart,
  };
}
export function updateCollectionSuccess(user) {
  return {
    type: TYPE.updateSuccess,
    payload: { user },
  };
}
export function updateCollectionFail(error) {
  return {
    type: TYPE.updateFail,
    payload: { error },
  };
}

/* DELETE */

export function deleteUserStart() {
  return {
    type: TYPE.deleteStart,
  };
}
export function deleteUserSuccess(id) {
  return {
    type: TYPE.deleteSuccess,
    // delete user from collection
    payload: { id },
  };
}
export function deleteUserFail(error) {
  return {
    type: TYPE.deleteFail,
    // delete user from collection
    payload: { error },
  };
}

/* FILTER  */
export function filterCollection(text) {
  return {
    type: TYPE.filter,
    payload: { text },
  };
}
