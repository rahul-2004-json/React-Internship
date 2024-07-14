import React from "react";

export default function Card({ data }) {
  return (
    <div className="card-container">
      <img src={data.avatar_url} alt={`${data.name}'s avatar`} />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <p>{data.followers} Followers</p>
      <p>{data.location}</p>
    </div>
  );
}
