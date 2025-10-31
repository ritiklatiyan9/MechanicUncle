// src/store/store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';

// 1. Combine your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer
});

// 2. Create the persist configuration
const persistConfig = {
  key: 'root', // The key for the persisted state in storage
  storage, // The storage engine to use (localStorage in this case)
  whitelist: ['auth'] // IMPORTANT: Only persist the 'auth' slice. We don't want to persist temporary state like 'loading' or 'error' from the app slice.
};

// 3. Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // This is to prevent a non-serializable value error with redux-persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// 5. Create the persistor
export const persistor = persistStore(store);