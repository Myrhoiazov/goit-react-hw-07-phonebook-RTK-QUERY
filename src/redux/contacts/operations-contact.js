import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContact,
  getPostContact,
  getDeleteContact,
} from '../../services/contactApi';

export const fetchAllContact = createAsyncThunk(
  'contacts/fetchAllContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContact();
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await getPostContact(item);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getDeleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
