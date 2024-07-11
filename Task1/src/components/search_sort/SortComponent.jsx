import React from "react";

export default function SortComponent({
  sortOrder,
  handleSortbtn,
  checkedbox,
  handleCheckBox,
}) {
  return (
    <div className="sort-container">
      <p>Sort Data</p>
      <input type="checkbox" checked={checkedbox} onClick={handleCheckBox} />
      <button onClick={handleSortbtn}>{sortOrder}</button>
    </div>
  );
}
