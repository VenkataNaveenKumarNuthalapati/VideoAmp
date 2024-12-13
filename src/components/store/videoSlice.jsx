import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const videoReducer = createSlice({
    name: "videos",
    initialState: {
        videoList: [],
        loading: false,
        error: null,
        isMenuOpen: false,
        searchSuggestions: {},
    },
    reducers: {
        fetchVideosStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchVideosSuccess: (state, action) => {
            state.loading = false;
            state.videoList = action.payload;
        },
        fetchVideosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setsSuggestions: (state, action) => {
            const { key, result } = action.payload;
            state.searchSuggestions[key] = result;
        },
    },
});

export const {
    fetchVideosStart,
    fetchVideosSuccess,
    fetchVideosFailure,
    setMenuOpen,
    setsSuggestions,
} = videoReducer.actions;
export default videoReducer.reducer;
