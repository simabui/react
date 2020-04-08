export const TYPE = {
  update: 'COLLECTION_UPDATE',
  filter: 'FILTER_COLLECTION',
  delete: 'DELETE_USER',
};

export function updateCollection(users) {
  return {
    type: TYPE.update,
    // updat obj user
    payload: users.map(user => ({
      name: user.name,
      number: user.number,
      id: user.id,
    })),
  };
}

export function filterCollection(text) {
  return {
    type: TYPE.filter,
    // update filter string
    payload: text,
  };
}

export function deleteUser(id) {
  return {
    type: TYPE.delete,
    // delete user from collection
    payload: id,
  };
}
