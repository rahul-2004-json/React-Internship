import React, { useState } from "react";
import { data } from "../../../services/data";
import SearchBar from "../Search-bar/index";
import Card from "../Item-card/index";
import "./styles.css";

function SearchInTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setfilteredData] = useState(data);

  const handleChangeInSearch = (value) => {
    setSearchQuery(value);
    const filtered =
      value === ""
        ? data
        : data.filter((dataItem) => {
            return (
              dataItem.service_no.toLowerCase().includes(value.toLowerCase()) ||
              dataItem.description
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              dataItem.day.toLowerCase().includes(value.toLowerCase()) ||
              dataItem.status.toLowerCase().includes(value.toLowerCase())
            );
          });
    setfilteredData(filtered);
  };

  return (
    <div>
      <div className="search-bar-container">
        <SearchBar
          setSearchValue={setSearchQuery}
          searchValue={searchQuery}
          onSearchBoxChange={handleChangeInSearch}
        />
      </div>
      <Card data={filteredData} />
    </div>
  );
}

export default SearchInTable;
