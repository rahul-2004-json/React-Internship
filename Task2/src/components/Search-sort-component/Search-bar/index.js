import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "./styles.css";

export default function SearchBar({ searchValue, onSearchBoxChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        className="search-bar"
        onChange={(e) => onSearchBoxChange(e.target.value)}
      />
      {searchValue === "" ? (
        <CiSearch className="search-icon" />
      ) : (
        <RxCross2
          className="cross-icon"
          onClick={() => onSearchBoxChange("")}
        />
      )}
    </div>
  );
}
