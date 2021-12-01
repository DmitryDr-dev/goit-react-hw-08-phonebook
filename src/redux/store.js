import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import { combineReducers } from 'redux';
import userAuthReducer from 'redux/auth/auth-reducers';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   userAuthReducer,
// });

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, userAuthReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
