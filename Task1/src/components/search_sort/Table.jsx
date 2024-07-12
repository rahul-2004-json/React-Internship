import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function Table({ data }) {
  const [sortedData, setSortedData] = useState([]);
  const [order, setOrder] = useState("Ascending");
  const [orderArray, setOrderArray] = useState([]);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const sorting = (col) => {
    if (order === "Ascending") {
      const sorted = [...sortedData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setSortedData(sorted);
    }
    if (order === "Descending") {
      const sorted = [...sortedData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setSortedData(sorted);
    }
  };

  const handleIncreasebtn = (e) => {
    if (order === "Descending") {
      setOrder("Ascending");
    }

    setOrderArray((prevOrderarray) => {
      if (!prevOrderarray.includes("Ascending") && prevOrderarray.length < 2) {
        return [...prevOrderarray, "Ascending"];
      } else if (orderArray.length === 2) {
        return ["Ascending"];
      } else {
        return prevOrderarray;
      }
    });

    const upbtns = document.querySelectorAll(".up-btn");
    upbtns.forEach((button) => {
      button.style.display = "none";
    });
  };

  const handleDecreasebtn = (e) => {
    if (order === "Ascending") {
      setOrder("Descending");
    }

    setOrderArray((prevOrderarray) => {
      if (!prevOrderarray.includes("Descending") && prevOrderarray.length < 2) {
        return [...prevOrderarray, "Descending"];
      } else if (orderArray.length === 2) {
        return ["Descending"];
      } else {
        return prevOrderarray;
      }
    });

    const downbtns = document.querySelectorAll(".down-btn");
    downbtns.forEach((button) => {
      button.style.display = "none";
    });
  };

  // useEffect(() => {
  //   if (orderArray.length === 2) {
  //     setOrderArray([]);
  //   }
  // }, [orderArray, setOrderArray]);

  console.log(orderArray);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <div className="table-head">
                Email
                {orderArray.length === 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("email");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("email");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
                {orderArray.length < 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("email");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("email");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
              </div>
            </th>
            <th>
              <div className="table-head">
                Restaurant_Id
                {orderArray.length === 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("restaurant_id");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("restaurant_id");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
                {orderArray.length < 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("restaurant_id");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("restaurant_id");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
              </div>
            </th>
            <th>
              <div className="table-head">
                Device Type
                {orderArray.length === 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("device_type");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("device_type");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
                {orderArray.length < 2 && (
                  <>
                    <button
                      className="up-btn"
                      onClick={(e) => {
                        handleIncreasebtn(e);
                        sorting("device_type");
                      }}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="down-btn"
                      onClick={(e) => {
                        handleDecreasebtn(e);
                        sorting("device_type");
                      }}
                    >
                      <FaArrowDown />
                    </button>
                  </>
                )}
              </div>
            </th>
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
            <h1>Oops! No Data</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
