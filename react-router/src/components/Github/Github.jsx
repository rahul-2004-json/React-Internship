import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //Receiving data from the loader called in route of github
  const data = useLoaderData();
  //One way to fecth data from api
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     //Below is a promise that will be resolved
  //     fetch("https://api.github.com/users/rahul-2004-json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div>
      <div className="bg-blue-200 flex flex-col items-center justify-center text-3xl p-4 text-center w-1/4 mx-auto mt-4 mb-4 rounded-md">
        {/* Always handle whether data recieved from api is null  */}
        Followers :{data && data.followers}
        <img src={data && data.avatar_url} />
      </div>
    </div>
  );
}

//Method that will be called in loader of route related to Github
export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/rahul-2004-json");
  //returning the data in json format through method
  return response.json();
};
