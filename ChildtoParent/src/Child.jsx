import React from "react";
import { useState } from "react";

function Child({ sendatatoparent }) {
  const [data, setData] = useState("");

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sendatatoparent(data);
          setData("");
        }}
      >
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child;
