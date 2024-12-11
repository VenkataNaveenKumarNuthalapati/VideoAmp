import React from "react";

const Header = () => {
    return (
        <header className="bg-white p-2 px-4 flex justify-between items-center w-full fixed top-0">
            <div className="flex items-center">
                <div className="hover:bg-gray-100 p-2 px-4">
                    <i className="fa-sharp fa-solid fa-bars hover:bg-gray-100 text-[20px] mt-1"></i>
                </div>

                <img
                    className="w-8 h-6 rounded mx-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/36/VA_Logo.png"
                    alt="logo"
                />
                <h1 className="text-2xl mt-3 italic font-bold text-red-700">
                    AmpVideo
                </h1>
            </div>
            <div className="flex w-[40%] justify-center items-center">
                <input
                    className="w-full outline-none focus:ring-1 border border-gray-400 border-r-0 p-1 px-4 rounded-l-full"
                    type="text"
                    placeholder="Search"
                />

                <button className="rounded-r-full border border-gray-400 p-1 px-2  bg-gray-100 hover:bg-gray-200">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div className="bg-gray-100 ml-4 p-2 px-3 rounded-full  hover:bg-gray-200">
                    <i className="fa-solid fa-microphone text-[20px]"></i>
                </div>
            </div>
            <div className="flex items-center gap-7">
                <i className="fa-regular fa-bell text-[20px]"></i>
                <i className="fa-solid fa-video  text-[20px]"></i>
                <img
                    className="w-10"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                />
            </div>
        </header>
    );
};

export default Header;
