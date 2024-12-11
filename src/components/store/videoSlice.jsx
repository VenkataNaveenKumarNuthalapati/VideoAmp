import { createSlice } from "@reduxjs/toolkit";

const videoReducer = createSlice({
    name: "videos",
    initialState: {
        videoList: [],
        loading: false,
        error: null,
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
    },
});

export const { fetchVideosStart, fetchVideosSuccess, fetchVideosFailure } =
    videoReducer.actions;
export default videoReducer.reducer;
