import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_API_URL } from "./constants";
import { setsSuggestions } from "../store/videoSlice";

export const useSearch = (initSetSearchState, initialSuggestions) => {
    const [searchState, setSearchState] = useState({
        userText: "",
        isSuggestionOpen: false,
        isSearchOpen: false,
    });
    const [activeIndex, setActiveIndex] = useState(-1); // Track active suggestion

    const searchSuggestions = useSelector(
        (state) => state.videos.searchSuggestions
    );
    const dispatch = useDispatch();
    const suggestions = searchSuggestions[searchState.userText] || [];

    useEffect(() => {
        getSuggestions();
    }, [searchState.userText]);

    const getSuggestions = async () => {
        if (!searchSuggestions[searchState.userText]) {
            const data = await fetch(SEARCH_API_URL + searchState.userText);
            const json = await data.json();
            dispatch(setsSuggestions({ key: json[0], result: json[1] }));
        }
    };

    const handleInputChange = (e) => {
        setSearchState({
            ...searchState,
            userText: e.target.value,
            isSuggestionOpen: true,
        });
        setActiveIndex(-1); // Reset active index when input changes
    };

    const handleSearch = () => {
        setSearchState({
            ...searchState,
            isSuggestionOpen: false,
        });
    };

    const handleCloseSearch = () => {
        console.log(searchState.isSearchOpen);
        initSetSearchState(false);
        setSearchState({
            userText: "",
            isSuggestionOpen: false,
            isSearchOpen: false,
        });
        setActiveIndex(-1); // Reset active index
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchState({
            ...searchState,
            userText: suggestion,
            isSuggestionOpen: false,
        });
        setActiveIndex(-1); // Reset active index
    };

    const handleClearUserInput = () => {
        setSearchState({
            ...searchState,
            userText: "",
        });
        setActiveIndex(-1); // Reset active index
    };

    const handleKeyDown = (e) => {
        if (searchState.isSuggestionOpen) {
            if (e.key === "ArrowDown") {
                setActiveIndex((prevIndex) =>
                    prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
                );
            } else if (e.key === "ArrowUp") {
                setActiveIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
                );
            } else if (e.key === "Enter" && activeIndex !== -1) {
                handleSuggestionClick(suggestions[activeIndex]);
                e.preventDefault(); // Prevent default form submission
            } else if (e.key === "Escape") {
                setSearchState({
                    ...searchState,
                    isSuggestionOpen: false,
                });
            }
        }
    };

    return {
        searchState,
        suggestions,
        activeIndex,
        handleInputChange,
        handleSearch,
        handleCloseSearch,
        handleSuggestionClick,
        handleClearUserInput,
        handleKeyDown,
    };
};
