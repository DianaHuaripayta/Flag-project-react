import { configureStore } from "@reduxjs/toolkit";
import countryReducers from './features/listSlice'
export const store = configureStore({
    reducer:countryReducers,
});
export type AppDispatch = typeof store.dispatch;
export type  RootState = ReturnType<typeof store.getState>