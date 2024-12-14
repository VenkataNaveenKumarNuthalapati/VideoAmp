import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchVideos from "./useFetchVideos";

const useWatchVideo = (videoId) => {
    const { videoList } = useSelector((state) => state.videos);
    const [chatMessages, setChatMessages] = useState([]);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    useFetchVideos();
    const { snippet } = videoList.find(
        (eachVideo) => eachVideo.id === videoId
    ) || { snippet: {} };
    const videoObjDetails = snippet;

    // Fetch live messages
    useEffect(() => {
        const interval = setInterval(async () => {
            const data = await fetch("https://apis.ccbp.in/jokes/random");
            const json = await data.json();
            setChatMessages((prevMessages) => [json.value, ...prevMessages]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Toggle description visibility
    const toggleDescription = () => {
        setIsDescriptionOpen((prevState) => !prevState);
    };

    // Redux state for selected video
    const videoState = useSelector((state) => state?.videos?.videoList || []);
    const selectedVideo =
        videoState.find((video) => video.id === videoId) || {};

    return {
        videoObjDetails,
        selectedVideo,
        chatMessages,
        isDescriptionOpen,
        toggleDescription,
    };
};

export default useWatchVideo;
