import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice"
import themereducer from "../features/theme/ThemeSlice"

export const store = configureStore({
    reducer: {
        counterReducer,
        themereducer
    }
});

export type RootState = ReturnType<typeof store.getState>