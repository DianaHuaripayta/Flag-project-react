import { configureStore } from "@reduxjs/toolkit";
import countryReducers from './features/listSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from 'redux-logger'

export const store = configureStore({
    reducer:countryReducers,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    
});
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch;
export type  RootState = ReturnType<typeof store.getState>