import { createAction } from '@reduxjs/toolkit';

export const updateCollection = createAction('phonebook/COLLECTION_UPDATE');
export const filterCollection = createAction('phonebook/FILTER_COLLECTION');
export const deleteUser = createAction('phonebook/DELETE_USER');
