import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";
import "./navbar.css";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParam);
  return (
    <div className="navbar-container">
      <div>
        <Link to={"/"} className="title-logo">
          FindMyMovie
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          placeholder="search a movie here..."
          type="text"
          name="movie"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <div className="navlink-container">
        <Link to={"/"} className="navbar-links">
          Home
        </Link>
        <Link to={"/favourites"} className="navbar-links">
          Favourites
        </Link>
      </div>
    </div>
  );
}
