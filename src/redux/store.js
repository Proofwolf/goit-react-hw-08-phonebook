import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//Конфігурація для redux-persist (Persisting token field from auth slice to localstorage)
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

//Створюємо ""персистований" редюсер на основі authReducer
const persistedReducer = persistReducer(authPersistConfig, authReducer);

//Створюємо redux store
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  //Додаємо middleware (прошарок), щоб позбутися помилок
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Експортуємо "персистований" stor (persistor) у зовнішній код. Використовується для PersistGate (обгортці для App)
