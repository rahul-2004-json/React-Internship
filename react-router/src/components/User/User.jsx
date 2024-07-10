import React from "react";
import { useParams } from "react-router-dom";
function User() {
  // Fetches the userId from path parameter
  const { userId } = useParams();
  return <div className="text-3xl p-4 text-center">User Id : {userId}</div>;
}

export default User;
