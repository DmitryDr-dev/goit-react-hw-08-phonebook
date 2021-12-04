import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducers from 'redux/auth/auth-reducers';
import contactsReducers from 'redux/contacts/contacts-reducers';
import { configureStore } from '@reduxjs/toolkit';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducers),
  contacts: contactsReducers,
});

// export default persistReducer(rootPersistConfig, rootReducer);

// const rootReducer = combineReducers({
//   auth,
//   contacts,
// });

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
