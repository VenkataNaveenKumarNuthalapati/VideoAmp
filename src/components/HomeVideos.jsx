import React, { useState } from "react";
import { categories } from "./utils/constants";
import { useSelector } from "react-redux";
import useFetchVideos from "./utils/useFetchVideos";
import VideoCard from "./videoCard";
import VideoWithHover from "./VideoWithHover";

const HomeVideos = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    useFetchVideos(); // Custom hook to fetch videos

    const { videoList, loading, error } = useSelector((state) => state.videos);

    if (loading || videoList.length === 0) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-[100%] overflow-y-scroll hide-scrollbar p-2">
            <ul className="flex mt-1 overflow-x-scroll hide-scrollbar">
                {categories.map((eachCat, index) => (
                    <button
                        className={`${
                            activeTabId === index
                                ? "bg-black text-white "
                                : "bg-gray-100 text-black "
                        }bg-gray-100 ${
                            activeTabId !== index && "hover:bg-gray-200 "
                        } font-medium mx-2 p-1 px-4 whitespace-nowrap rounded-lg`}
                        key={index}
                        onClick={() => setActiveTabId(index)}
                    >
                        {eachCat}
                    </button>
                ))}
            </ul>
            <div className="flex flex-wrap m-2 justify-center">
                {videoList.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default HomeVideos;
