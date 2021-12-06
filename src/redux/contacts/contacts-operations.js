import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as mockApi from 'services/mockaApi';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contactToAdd, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', contactToAdd);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const editContact = createAsyncThunk(
  'contacts/editContact',
  async (credentials, { rejectWithValue }) => {
    const { contactId, contactToUpdate } = credentials;
    try {
      const { data } = await axios.patch(
        `contacts/${contactId}`,
        contactToUpdate,
      );
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const contactsOperations = {
  fetchContacts,
  addNewContact,
  deleteContact,
  editContact,
};

export default contactsOperations;
