import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookSlice from './booksSlice/bookSlice';
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";

const rootReducer = combineReducers({
  allBooks: bookSlice,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler : autoMergeLevel1 ,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store);
export default store;
