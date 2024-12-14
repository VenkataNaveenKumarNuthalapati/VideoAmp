import { useState } from "react";
import { countNestedReplies, timeAgo } from "./utils/helperFunctions";

const Comments = ({ comments }) => {
    if (!comments || comments.length === 0) return null;

    return (
        <div className="py-4">
            {comments.map((comment) => {
                // Calculate the total nested replies for each comment
                const totalReplies = countNestedReplies(comment.replies);

                return (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        totalReplies={totalReplies}
                    />
                );
            })}
        </div>
    );
};

const CommentCard = ({ comment, totalReplies }) => {
    const [isRepliesVisible, setIsRepliesVisible] = useState(false);

    const toggleRepliesVisibility = () => {
        setIsRepliesVisible((prev) => !prev);
    };

    return (
        <div key={comment.id} className="ml-7 mb-1">
            <div className="flex p-1">
                {/* Profile Image */}
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                />
                <div className="w-full">
                    <div>
                        <span className="text-[14px] font-medium text-gray-800">
                            @{comment.user}{" "}
                        </span>
                        <span className="text-gray-500 text-[11px]">
                            {timeAgo(comment.timestamp)}
                        </span>
                    </div>

                    <p className="mt-2 text-[13px] text-gray-800">
                        {comment.text}
                    </p>
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-600 hover:text-blue-500 transition duration-300">
                            <i className="fa-regular fa-thumbs-up"></i>
                        </button>
                        <p className="text-gray-700">{comment.likes}</p>
                        <button className="text-gray-600 hover:text-red-500 transition duration-300">
                            <i className="fa-regular fa-thumbs-down"></i>
                        </button>
                        <button className="text-gray-500 text-sm">
                            replay
                        </button>
                    </div>
                    {/* Reply Button and Count */}
                    {totalReplies > 0 && (
                        <button
                            className="text-blue-600 text-sm hover:underline focus:outline-none"
                            onClick={toggleRepliesVisibility}
                        >
                            {totalReplies} reply{totalReplies > 1 && "s"}
                        </button>
                    )}
                </div>
            </div>

            {/* Conditionally render replies */}
            {isRepliesVisible && <Comments comments={comment.replies} />}
        </div>
    );
};

export default Comments;
