import React, { useContext } from "react";
import { GlobalContext } from "../context";
import MovieCard from "../components/MovieCard";
import "./home.css";

export default function Home() {
  const { movieList, loading } = useContext(GlobalContext);
  if (loading) {
    return <div>Loading data please wait...</div>;
  }
  return (
    <div className="home-page-container">
      {movieList ? (
        movieList.map((movie, index) => <MovieCard movie={movie} key={index} />)
      ) : (
        <div>Nothing to show.Please search something! </div>
      )}
    </div>
  );
}
