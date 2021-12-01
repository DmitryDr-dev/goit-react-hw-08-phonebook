import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/auth-operations';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: {
    [authOperations.userSignUp.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.userSignUp.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.userLogin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.userLogin.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.userLogOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.userLogOut.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
