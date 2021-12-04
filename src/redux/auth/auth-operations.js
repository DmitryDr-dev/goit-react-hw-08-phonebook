import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const userSignUp = createAsyncThunk(
  'users/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, userData);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const userLogin = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const userLogOut = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const authOperations = {
  userSignUp,
  userLogin,
  userLogOut,
  fetchCurrentUser,
};

export default authOperations;
