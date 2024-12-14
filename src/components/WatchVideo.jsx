import React from "react";
import { useParams } from "react-router";
import Comments from "./Comments";
import { comments } from "./utils/mockData";
import { countNestedReplies } from "./utils/helperFunctions";
import useWatchVideo from "./utils/useWatchVideo";
import live from "../assets/live.png";

const WatchVideo = () => {
    const params = useParams();
    const {
        videoObjDetails,
        chatMessages,
        videoObj,
        isDescriptionOpen,
        toggleDescription,
    } = useWatchVideo(params.videoId);

    const getVideoFrameJSX = () => (
        <div className="w-full md:w-7/12">
            <iframe
                className="w-full h-[270px] md:h-[380px] rounded-2xl"
                title="YouTube video player"
                src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1&mute=0&controls=1&rel=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            <h1 className="text-[20px] mt-1 font-medium">
                {videoObjDetails?.title || "Has No Title"}
            </h1>
            <div
                className={`my-2 relative bg-[#f2f2f2] rounded-lg p-3 ${
                    !isDescriptionOpen && "h-[83px] overflow-y-hidden"
                }`}
            >
                <button
                    onClick={toggleDescription}
                    className="absolute bottom-0 right-0 bg-[#f2f2f2] bg-opacity-90 font-medium text-black p-1 px-2 rounded-lg"
                >
                    {isDescriptionOpen ? "show less" : "...more"}
                </button>
                <p className="text-[15px]">
                    {videoObjDetails?.description || "Has No Description"}
                </p>
            </div>
        </div>
    );

    const getLiveChatJSX = () => (
        <div className="w-full md:w-5/12 h-[300px] md:h-[380px] px-2">
            <div className="bg-gray-100 rounded-lg h-full p-2">
                <div className="flex">
                    <img src={live} alt="" className="w-10 h-5 rounded-md" />
                    <span className="font-bold inline">Chat</span>
                </div>
                <ul className="h-[95%] px-1 flex flex-col-reverse overflow-y-scroll">
                    {chatMessages.map((message, index) => (
                        <li
                            className="mb-1 text-[12px] flex items-center"
                            key={index}
                        >
                            <img
                                className="w-5 h-5 mr-2 m-2"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="profile"
                            />
                            <span className="ml-2">
                                <b>{message.slice(0, 7)}</b>: {message}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="w-full px-2 md:mt-14 overflow-y-scroll hide-scrollbar">
            <div className="flex-wrap md:flex">
                {getVideoFrameJSX()}
                {getLiveChatJSX()}
            </div>
            <div className="flex-wrap md:flex">
                <div className="w-full md:w-7/12 mt-0">
                    <div className="pr-1">
                        <h1 className="text-[20px] font-semibold">
                            {countNestedReplies(comments)} Comments
                        </h1>
                        <Comments comments={comments} />
                    </div>
                </div>
                <div className="w-full md:w-5/12 mt-0">Related Videos</div>
            </div>
        </div>
    );
};

export default WatchVideo;
