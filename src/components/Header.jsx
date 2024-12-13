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
        <header className="flex flex-wrap bg-white p-2 px-4 justify-between items-center w-full top-0">
            <div className="w-7/12 md:w-4/12 flex items-center">
                <div
                    className="hover:bg-gray-100 p-2 md:px-4"
                    onClick={handleMenuClick}
                >
                    <i className="fa-sharp fa-solid fa-bars hover:bg-gray-100 text-[20px] mt-1"></i>
                </div>

                <img
                    className="w-10 h-7 rounded mx-3 mt-2"
                    src={logo}
                    alt="logo"
                />
                <h1 className="text-2xl mt-3 italic font-bold text-[#d42a37]">
                    AmpVideo
                </h1>
            </div>
            {!isSearchOpen && (
                <div
                    className="w-[32px] md:hidden text-center rounded-full p-1 hover:bg-gray-100"
                    onClick={toggleSearchVisibility}
                >
                    <i className="fa-solid fa-magnifying-glass text-[17px]"></i>
                </div>
            )}

            <SearchBar
                isSearchOpen={isSearchOpen}
                initSetSearchState={setSearchState}
            />
            <div className="w-4/12 order-2 md:order-3 md:w-3/12 flex items-center gap-7 justify-end">
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
