import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles.css";

export default function SearchBar() {
  const [username, setUsername] = useState("rahul-2004-json");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchFromGithub() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFromGithub();
  }, []);

  if (loading) {
    return (
      <div className="loading-message">
        <h1>Please wait data is loading!</h1>
      </div>
    );
  }

  return (
    <div className="profile-finder-container">
      <div className="search-container">
        <input
          className="input-field"
          placeholder="Enter github username.."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            fetchFromGithub();
          }}
        >
          Search
        </button>
      </div>
      {data.status !== "404" ? (
        <Card data={data} />
      ) : (
        <h1>404 : No such user exists</h1>
      )}
    </div>
  );
}
