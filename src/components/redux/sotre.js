// import { configureStore } from '@reduxjs/toolkit';
// import { carsReduser } from './CarsSlice';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//   reducer: { cars: carsReduser },
// });

// import rootReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whiteList: ['favorites'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
