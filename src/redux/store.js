import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { ReducerFilter } from 'features/filterSlice';
import {contactsApi} from 'features/phoneBookSlice'

export const store = configureStore({
    reducer: {
        filter: ReducerFilter,
        [contactsApi.reducerPath]: contactsApi.reducer,  
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch)