import React, { useState } from "react";

export default function Table({ data, order, checkbox }) {
  const [sortedData, setSortData] = useState(data);
  const sorting = (col) => {
    if (order === "Ascending") {
      const sorted = [...sortedData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setSortData(sorted);
    }
    if (order === "Descending") {
      const sorted = [...sortedData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setSortData(sorted);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("email")}>Email</th>
            <th onClick={() => sorting("restaurant_id")}>Restaurant_Id</th>
            <th onClick={() => sorting("device_type")}>Device Type</th>
            <th>Sent-On</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {(checkbox ? sortedData : data) &&
          (checkbox ? sortedData : data).length > 0 ? (
            (checkbox ? sortedData : data).map((dataitem, index) => (
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
            <h1>Oops! No Data</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
