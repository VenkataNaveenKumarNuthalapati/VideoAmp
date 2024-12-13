import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const { isMenuOpen } = useSelector((store) => store.videos);

    return (
        <div
            className={`${
                !isMenuOpen && "hidden md:block"
            } px-1 md:w-[70px] flex-col items-center text-center md:pt-4`}
        >
            <div className="hover:bg-gray-100 p-4 rounded-lg ml-1">
                <i className="fa-solid fa-house text-[17px] mx-2 "></i>
                <p className="text-[12px]">Home</p>
            </div>
            <div className="hover:bg-gray-100 p-4 rounded-lg ml-1">
                <img
                    className="w-9 h-10 mx-auto mt-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB-84DwBgGMVW3sRVPbh6Q1SGvKTpNNYd8A&s"
                    alt=""
                />
            </div>
            <p className="text-[12px]">Shorts</p>
            <div className="hover:bg-gray-100 p-4 rounded-lg ml-1">
                <img
                    className="w-5 h-7 mx-auto mt-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s"
                    alt=""
                />
            </div>
            <p className="text-[12px]">Subscriptions</p>
            <div className="hover:bg-gray-100 p-4 rounded-lg ml-1">
                <i className="fa-solid fa-user text-[23px] mx-2 mt-2"></i>
                <p className="text-[12px]">You</p>
            </div>
        </div>
    );
};

export default Sidebar;
