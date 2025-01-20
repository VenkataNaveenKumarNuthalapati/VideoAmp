import React, { useState } from "react";

const VideoWithHover = ({ imageUrl, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[250px] md:h-[280px] cursor-pointer mt-2 p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && (
                <div
                    className="poster rounded-2xl hover:rounded-none transition-all duration-500"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `url('${imageUrl}') no-repeat center center / cover`,
                        zIndex: -1,
                    }}
                />
            )}
            {isHovered && (
                <iframe
                    className="bg-black rounded-2xl hover:rounded-none transition-all duration-500"
                    title="YouTube video player"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&rel=0&modestbranding=1`}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        zIndex: -1,
                        background: `url('${imageUrl}') no-repeat center center / cover`,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoWithHover;
