import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "Theme",
    initialState: {
        theme: "light"
    },
    reducers: {
        themeChanger: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light';
        }
    }
});

export const { themeChanger } = ThemeSlice.actions;
export default ThemeSlice.reducer;