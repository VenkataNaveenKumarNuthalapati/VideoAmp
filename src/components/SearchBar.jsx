import React, { useRef } from "react";
import { useSearch } from "./utils/useSearch"; // Import the custom hook

const SearchBar = ({ isSearchOpen, initSetSearchState }) => {
    const userInput = useRef(null);
    const {
        searchState,
        suggestions,
        activeIndex,
        handleInputChange,
        handleSearch,
        handleCloseSearch,
        handleSuggestionClick,
        handleClearUserInput,
        handleKeyDown,
    } = useSearch(initSetSearchState, ["Samsung", "Sony"]); // Pass initial suggestions

    return (
        <div
            className={`${
                isSearchOpen ? "block " : "hidden "
            } m-auto z-20 flex w-full order-3 md:order-2 md:w-5/12 relative md:flex justify-center items-center`}
        >
            <button
                className="md:hidden rounded-full mr-3 border border-gray-400 p-1 px-2 bg-gray-100 hover:bg-gray-200"
                onClick={handleCloseSearch}
            >
                <i className="fa-solid fa-backward"></i>
            </button>
            <input
                ref={userInput}
                value={searchState.userText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Add keydown handler
                className="w-full outline-none focus:ring-1 border border-gray-400 border-r-0 p-1 px-4 rounded-l-full"
                type="text"
                placeholder="Search"
            />
            {searchState.userText ? (
                <button
                    className="rounded-r-full border border-gray-400 p-1 px-2 bg-gray-100 hover:bg-gray-200"
                    onClick={() => handleClearUserInput(userInput.current)}
                >
                    <i className="fa-solid fa-x px-[2px]"></i>
                </button>
            ) : (
                <button
                    className="rounded-r-full border border-gray-400 p-1 px-2 bg-gray-100 hover:bg-gray-200"
                    onClick={handleSearch}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            )}
            <div className="bg-gray-100 ml-4 p-2 px-3 rounded-full hover:bg-gray-200">
                <i className="fa-solid fa-microphone text-[20px]"></i>
            </div>
            {searchState.isSuggestionOpen && searchState.userText && (
                <ul
                    className="w-full absolute top-10 left-11 md:left-0 bg-white shadow-lg p-2 rounded-lg z-10"
                    role="listbox"
                >
                    {suggestions.map((item, index) => (
                        <li
                            key={item}
                            className={`p-1 px-2 rounded-lg hover:bg-gray-200 cursor-pointer ${
                                index === activeIndex ? "bg-gray-200" : ""
                            }`}
                            onClick={() => handleSuggestionClick(item)}
                            role="option"
                            aria-selected={searchState.userText === item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
