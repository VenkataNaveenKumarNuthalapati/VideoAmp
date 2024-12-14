import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { setMenuOpen } from "./store/videoSlice";
import SearchBar from "./SearchBar";

const Header = () => {
    const [isSearchOpen, setSearchState] = useState(false);
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(setMenuOpen());
    };

    const toggleSearchVisibility = () => {
        setSearchState(true);
    };

    return (
        <header className="flex flex-wrap bg-white p-1 px-4 justify-between items-center w-full md:fixed top-0">
            <div className="w-6/12 md:w-4/12 flex items-center">
                <div
                    className="hover:bg-gray-100 p-2 md:px-4"
                    onClick={handleMenuClick}
                >
                    <i className="fa-sharp fa-solid fa-bars hover:bg-gray-100 text-[19px] mt-1"></i>
                </div>

                <img
                    className="w-7 h-5 md:w-8 md:h-5 rounded mx-2 mt-2"
                    src={logo}
                    alt="logo"
                />
                <h1 className="text-1xl md:text-[19px] mt-3 italic font-bold text-[#d42a37]">
                    AmpVideo
                </h1>
            </div>

            <SearchBar
                isSearchOpen={isSearchOpen}
                initSetSearchState={setSearchState}
            />
            <div className="w-6/12 order-2 md:order-3 md:w-3/12 flex items-center gap-3 md:gap-7 justify-end">
                {!isSearchOpen && (
                    <div
                        className="w-[32px] md:hidden text-center rounded-full p-1 hover:bg-gray-100"
                        onClick={toggleSearchVisibility}
                    >
                        <i className="fa-solid fa-magnifying-glass text-[17px]"></i>
                    </div>
                )}
                <div className="w-[32px] text-center rounded-full p-1 hover:bg-gray-100">
                    <i className="fa-regular fa-bell text-[20px]"></i>
                </div>
                <div className="w-[32px] text-center rounded-full p-1 hover:bg-gray-100">
                    <i className="fa-solid fa-video  text-[20px]"></i>
                </div>

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
