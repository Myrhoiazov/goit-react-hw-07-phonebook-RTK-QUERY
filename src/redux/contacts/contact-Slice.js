import { createSlice } from '@reduxjs/toolkit';
import initialContact from './initial-state.contact';
import {
  fetchAllContact,
  addContact,
  deleteContact,
} from '../contacts/operations-contact';

const itemsSlice = createSlice({
  name: 'contacts',
  initialState: initialContact,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },

  extraReducers: {
    [fetchAllContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchAllContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    [fetchAllContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = [...state.contacts, payload];
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(user => user.id !== payload.id);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = itemsSlice.reducer;
export const { setFilter } = itemsSlice.actions;
