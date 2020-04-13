export const TYPE = {
  getStart: 'COLLECTION_GET_START',
  getSuccess: 'COLLECTION_GET_SUCCESS',
  getFail: 'COLLECTION_GET_FAIL',
  updateStart: 'COLLECTION_UPDATE_START',
  updateSuccess: 'COLLECTION_UPDATE_SUCCESS',
  updateFail: 'COLLECTION_UPDATE_FAIL',
  filter: 'FILTER_COLLECTION',
  deleteStart: 'DELETE_USER_START',
  deleteSuccess: 'DELETE_USER_SUCCESS',
  deleteFail: 'DELETE_USER_FAIL',
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
