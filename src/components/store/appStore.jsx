import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";

const appStore = configureStore({
    reducer: {
        videos: videoReducer,
    },
});

export default appStore;
