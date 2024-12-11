import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchVideosStart,
    fetchVideosSuccess,
    fetchVideosFailure,
} from "../store/videoSlice";
import { API_URL } from "./constants";

const useFetchVideos = () => {
    const dispatch = useDispatch();
    const { videoList } = useSelector((state) => state.videos);

    useEffect(() => {
        if (!videoList || videoList.length === 0) {
            fetchVideos();
        }
    }, [dispatch, videoList]);

    const fetchVideos = async () => {
        dispatch(fetchVideosStart()); // Start fetching
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            dispatch(fetchVideosSuccess(data.items)); // Fetch success
        } catch (error) {
            dispatch(fetchVideosFailure(error.message)); // Fetch failure
            console.error("Error fetching videos:", error);
        }
    };
};

export default useFetchVideos;
