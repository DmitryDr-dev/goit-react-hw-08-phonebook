// import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from 'redux/contacts/contacts-operations';
// import { changeFilter } from 'redux/contacts/contacts-actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
      state.contacts = payload;
    },
    [contactsOperations.addNewContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.concat(payload);
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export default contactsSlice.reducer;

// const contacts = createReducer([], {
//   [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => [
//     ...payload,
//   ],
//   [contactsOperations.addNewContact.fulfilled]: (state, { payload }) => [
//     ...state,
//     payload,
//   ],
//   [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload.data.id),
// });

// const loading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [addNewContact.pending]: () => true,
//   [deleteContact.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addNewContact.fulfilled]: () => false,
//   [addNewContact.rejected]: () => false,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.pending]: () => null,
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [addNewContact.pending]: () => null,
//   [addNewContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.pending]: () => null,
//   [deleteContact.rejected]: (_, { payload }) => payload,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const contactsReducers = combineReducers({
//   contacts,
//   filter,
//   loading,
//   error,
// });

// export default contactsReducers;
