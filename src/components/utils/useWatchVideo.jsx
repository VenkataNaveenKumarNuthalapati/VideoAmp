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

            setChatMessages((prevMessages) => {
                const updatedMessages = [json.value, ...prevMessages];
                // Ensure the array length does not exceed 200
                if (updatedMessages.length > 200) {
                    updatedMessages.splice(-1, 1); // Remove the last message
                }
                return updatedMessages;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Toggle description visibility
    const toggleDescription = () => {
        setIsDescriptionOpen((prevState) => !prevState);
    };

    return {
        videoObjDetails,
        chatMessages,
        isDescriptionOpen,
        toggleDescription,
    };
};

export default useWatchVideo;
