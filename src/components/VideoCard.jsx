import React from "react";
import { formatViews, timeAgo } from "./utils/helperFunctions";
import VideoWithHover from "./VideoWithHover";

const VideoCard = ({ video }) => {
    return (
        <div className="mt-2 p-2 w-4/12">
            {/* <img
                className="rounded-2xl hover:rounded-none transition-all duration-500 w-full"
                src={video?.snippet?.thumbnails?.medium.url}
                alt="thumbnail"
            /> */}
            <VideoWithHover
                imageUrl={video?.snippet?.thumbnails?.medium.url}
                id={video.id}
            />
            <di className="flex mt-2">
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
            </di>
        </div>
    );
};

export default VideoCard;
