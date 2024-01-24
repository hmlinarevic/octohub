// react
import { useState, useEffect, useRef } from "react";

// router
import { useLocation } from "react-router-dom";

// lib
import clsx from "clsx";

// custom hooks
import useDebounce from "../../hooks/useDebounce.jsx";

// icons
import { Search } from "react-feather";

// config
import { DEBOUNCE_DELAY } from "../../config/constants";

let touched = false;

/**
 * Search bar component.
 *
 * @returns {JSX.Element} Retruns an input text element with a search icon.
 */
export default function SearchBar({
  className,
  fetchData,
  isResetControls,
  setIsResetControls,
}) {
  // -- state --

  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { pathname } = useLocation();
  const inputRef = useRef(null);

  const queryString = `?name=${searchTerm}`;

  // configure debounce search
  const deboucedSearch = useDebounce((url) => fetchData(url), DEBOUNCE_DELAY);

  // -- handlers --

  // focus on input if clicked on the surrounding div
  const handleClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  // update state when input is focused to highlight the search icon
  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    // prevent fetching data on initial render
    touched = true;
  };

  // -- effects --

  // whenever user types into input fire debounced search 
  useEffect(() => {
    if (touched) {
      deboucedSearch(`${pathname}${searchTerm ? `/search${queryString}` : ""}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // reset when filter is cleared
  useEffect(() => {
    if (isResetControls) {
      setSearchTerm("");
      setIsResetControls(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResetControls]);

  // -- render --

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "flex h-full cursor-text items-center rounded border border-neutral-300 bg-neutral-100 pl-4 transition-colors",
        className,
      )}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="search by name"
        className="w-[140px] bg-transparent outline-none"
        onFocus={handleFocus}
        onBlur={handleFocus}
        onChange={handleSearchChange}
        value={searchTerm}
      />

      {/* icon */}
      <Search
        size={18}
        strokeWidth={2.5}
        className={clsx(
          "ml-2 mr-4 font-bold transition-colors",
          isFocused ? "stroke-lightViolet " : "stroke-neutral-400",
        )}
      />
    </div>
  );
}
