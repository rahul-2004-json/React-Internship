import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

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
