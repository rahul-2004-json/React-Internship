import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

function Navbar() {
  const { searchParam, setSearchParam, handlesubmit } =
    useContext(GlobalContext);
  console.log(searchParam);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink
        to={"/"}
        className="text-2xl font-semibold text-black hover:text-red-300 duration-300"
      >
        Food Recipes
      </NavLink>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="search recipes...."
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-red-300 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-red-300 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
