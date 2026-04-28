import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice"

export const store = configureStore({
    reducer: {
        counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>