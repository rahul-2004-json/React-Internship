import React, { useState } from "react";
import data from "../../services/apiService";
import SearchBar from "./SearchBar";
import Table from "./Table";
import SortComponent from "./SortComponent";
import "./styles.css";

function SearchInTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setfilteredData] = useState(data);
  const [checkedbox, setCheckedbox] = useState(false);
  const [sortOrder, setSortOrder] = useState("Ascending");

  const handleCheckBox = () => {
    checkedbox ? setCheckedbox(false) : setCheckedbox(true);
  };

  const handleSortbtn = () => {
    sortOrder === "Ascending"
      ? setSortOrder("Descending")
      : setSortOrder("Ascending");
  };

  const handleChangeInSearch = (value) => {
    setSearchQuery(value);
    const filtered =
      value === ""
        ? data
        : data.filter((dataItem) => {
            return (
              dataItem.email.toLowerCase().includes(value.toLowerCase()) ||
              dataItem.restaurant_id
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              dataItem.device_type
                .toLowerCase()
                .includes(value.toLowerCase()) ||
              dataItem.sent_on.toLowerCase().includes(value.toLowerCase()) ||
              dataItem.status.toLowerCase().includes(value.toLowerCase())
            );
          });
    setfilteredData(filtered);
  };

  console.log(sortOrder);
  return (
    <div>
      <div className="search-bar-container">
        <SearchBar
          setSearchValue={setSearchQuery}
          searchValue={searchQuery}
          onSearchBoxChange={handleChangeInSearch}
        />
        <SortComponent
          sortOrder={sortOrder}
          handleSortbtn={handleSortbtn}
          checkedbox={checkedbox}
          handleCheckBox={handleCheckBox}
        />
      </div>
      <Table data={filteredData} order={sortOrder} checkbox={checkedbox} />
    </div>
  );
}

export default SearchInTable;
