import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { ReducerUser } from "../features/userSlice"
import { ReducerFilter } from 'features/filterSlice';
import { contactsApi } from 'features/phoneBookAPI.js'
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

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};
const persistedUserReducer = persistReducer(userPersistConfig, ReducerUser);

export const store = configureStore({
    reducer: {
        filter: ReducerFilter,
        user: persistedUserReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,  
        
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch)