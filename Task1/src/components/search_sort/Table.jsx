import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function Table({ data }) {
  const [sortedData, setSortedData] = useState([]);
  const [order, setOrder] = useState(null); // 'Ascending' or 'Descending'
  const [showUpButton, setShowUpButton] = useState(true);
  const [showDownButton, setShowDownButton] = useState(true);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const sorting = (col, order) => {
    const sorted = [...sortedData].sort((a, b) =>
      order === "Ascending"
        ? a[col] > b[col]
          ? 1
          : -1
        : a[col] < b[col]
        ? 1
        : -1
    );
    setSortedData(sorted);
  };

  const handleUpBtnClick = (col) => {
    setOrder("Ascending");
    sorting(col, "Ascending");
    setShowUpButton(false);
    if (!showDownButton) {
      setShowUpButton(true);
      setShowDownButton(true);
    }
  };

  const handleDownBtnClick = (col) => {
    setOrder("Descending");
    sorting(col, "Descending");
    setShowDownButton(false);
    if (!showUpButton) {
      setShowUpButton(true);
      setShowDownButton(true);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {["email", "restaurant_id", "device_type"].map((col) => (
              <th key={col}>
                <div className="table-head">
                  {col.replace("_", " ")}
                  {showUpButton && (
                    <button
                      className="up-btn"
                      onClick={() => handleUpBtnClick(col)}
                    >
                      <FaArrowUp />
                    </button>
                  )}
                  {showDownButton && (
                    <button
                      className="down-btn"
                      onClick={() => handleDownBtnClick(col)}
                    >
                      <FaArrowDown />
                    </button>
                  )}
                </div>
              </th>
            ))}
            <th>Sent-On</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((dataitem, index) => (
              <tr key={index}>
                <td>{dataitem.email}</td>
                <td>{dataitem.restaurant_id}</td>
                <td>{dataitem.device_type}</td>
                <td>{dataitem.sent_on}</td>
                <td
                  className={
                    dataitem.status === "true" ? "sent-success" : "sent-reject"
                  }
                ></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Oops! No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
