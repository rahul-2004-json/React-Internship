import React from "react";
//This hook can be used in any functional component that needs to be aware of the current location,
//or needs to access data passed through the state in the route.
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const { name, email, tel } = location.state || {}; //empty if no state is defined
  return (
    <div>
      <div className="flex flex-col items-center bg-blue-200 w-1/4 mx-auto mt-4 mb-4 rounded-md">
        <h1 className="text-3xl">Details</h1>
        <p>Name :{name}</p>
        <p>Email :{email}</p>
        <p>Telephone :{tel}</p>
      </div>
    </div>
  );
}
