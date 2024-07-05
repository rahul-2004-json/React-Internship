import React from "react";
import { useState } from "react";
import Child from "./Child";

//If we want to send the data from child to parent then we will have to pass the callback function to the child component
function Parent() {
  const [datafromchild, setdatafromchild] = useState("");

  function getdatafromchild(data) {
    setdatafromchild(data);
  }

  return (
    <div>
      <Child sendatatoparent={getdatafromchild} />
      {datafromchild !== "" ? (
        <p>{datafromchild}</p>
      ) : (
        <p>Nothing was Received</p>
      )}
    </div>
  );
}

export default Parent;
