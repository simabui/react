export const TYPE = {
  update: 'COLLECTION_UPDATE',
  filter: 'FILTER_COLLECTION',
};

export function updateCollection(user) {
  return {
    type: TYPE.update,
    // update user
    payload: {
      name: user.name,
      number: user.number,
      id: user.id,
    },
  };
}

export function filterCollection(id) {
  return {
    type: TYPE.filter,
    payload: {
      id,
    },
  };
}
