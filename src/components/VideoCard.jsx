import React from "react";
import { formatViews, timeAgo } from "./utils/helperFunctions";
import VideoWithHover from "./VideoWithHover";

const VideoCard = ({ video }) => {
    return (
        <div className="mt-2 py-2 w-full px-2 md:w-4/12">
            <VideoWithHover
                imageUrl={video?.snippet?.thumbnails?.medium.url}
                id={video.id}
            />
            <div className="flex mt-2">
                <img
                    className="w-8 h-8 mr-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                />
                <div className="">
                    <p className="text-[16px] font-medium">
                        {video?.snippet?.title}
                    </p>

                    <p className="text-[#999999] text-[13px]">
                        {video?.snippet?.channelTitle}
                    </p>
                    <p className="text-[#999999] text-[13px]">
                        {formatViews(video.statistics.viewCount)} views .{" "}
                        {timeAgo(video.snippet?.publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
