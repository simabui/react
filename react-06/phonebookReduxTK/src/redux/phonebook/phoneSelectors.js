export const getContacts = state => state.phonebook.collection;
export const getFilterValue = state => state.phonebook.filter;

export const getFilteredContacts = state => {
  const constacts = getContacts(state);
  const filterValue = getFilterValue(state);

  return constacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase()),
  );
};
