import { createSelector } from 'reselect';

export const getContacts = state => state.phonebook.collection;
export const getFilterValue = state => state.phonebook.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    ),
);
