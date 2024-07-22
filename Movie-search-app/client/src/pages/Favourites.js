import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { GlobalContext } from "../context";
import "./favourite.css";

export default function Favourites() {
  const { favouriteList } = useContext(GlobalContext);
  return (
    <div className="favourite-list-container">
      {favouriteList ? (
        favouriteList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))
      ) : (
        <div className="handler-text">
          Nothing to show.Please search something!
        </div>
      )}
    </div>
  );
}
