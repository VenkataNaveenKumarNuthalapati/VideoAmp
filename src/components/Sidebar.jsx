import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const { isMenuOpen } = useSelector((store) => store.videos);

    return (
        <div
            className={`${
                !isMenuOpen
                    ? "translate-x-0 "
                    : "-translate-x-[85px] md:translate-x-0"
            } bg-white pr-2 md:w-[70px] flex-col items-center text-center md:pt-4 absolute md:relative transform transition-all`}
        >
            <div className="hover:bg-gray-100 p-1 text-center rounded-lg ml-1">
                <i className="fa-solid fa-house text-[17px] mx-2 "></i>
                <p className="text-[10px] font-medium">Home</p>
            </div>
            <div className="hover:bg-gray-100 px-1 text-center rounded-lg ml-1">
                <img
                    className="w-9 h-10 mx-auto mt-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB-84DwBgGMVW3sRVPbh6Q1SGvKTpNNYd8A&s"
                    alt=""
                />
                <p className="text-[10px] font-medium">Shorts</p>
            </div>

            <div className="hover:bg-gray-100 p-1 text-center rounded-lg ml-1">
                <img
                    className="w-5 h-7 mx-auto mt-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s"
                    alt=""
                />
                <p className="text-[9px] font-medium">Subscriptions</p>
            </div>

            <div className="hover:bg-gray-100 p-1 text-center rounded-lg ml-1">
                <i className="fa-solid fa-user text-[23px] mx-2 mt-2"></i>
                <p className="text-[10px] font-medium">You</p>
            </div>
        </div>
    );
};

export default Sidebar;
