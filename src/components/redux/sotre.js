import { configureStore } from '@reduxjs/toolkit';
import { carsReduser } from './CarsSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: { cars: persistReducer(persistConfig, carsReduser) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
