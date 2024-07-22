import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";
import "./details.css";

export default function Details() {
  const params = useParams();
  const MovieId = params.id;
  const { movieDetails, getMovieDetails, addToFavourite, favouriteList } =
    useContext(GlobalContext);

  useEffect(() => {
    getMovieDetails(MovieId);
  }, []);

  return (
    <div className="movie-details-page">
      {movieDetails ? (
        <div className="movie-details-container">
          <p className="movie-title">{movieDetails?.Title}</p>
          <div className="details-container">
            <div>
              <img
                src={movieDetails?.Poster}
                className="movie-poster"
                alt={movieDetails?.Title}
              />
            </div>
            <div className="movie-info">
              <span className="info-span">
                Director : {movieDetails?.Director}
              </span>
              <span className="info-span">Writer : {movieDetails?.Writer}</span>
              <span className="info-span">Actors : {movieDetails?.Actors}</span>
              <span className="info-span">
                Release Date : {movieDetails?.Released}
              </span>
              <span className="info-span">Genre : {movieDetails?.Genre}</span>
              <span className="info-span">
                Language : {movieDetails?.Language}
              </span>
              <span className="info-span">Plot: {movieDetails?.Plot}</span>
              <span className="info-span">
                Runtime : {movieDetails?.Runtime}
              </span>
              <span className="info-span">
                IMDB Ratings : {movieDetails?.imdbRating}
              </span>
              <button
                onClick={() =>
                  addToFavourite(movieDetails, movieDetails.imdbID)
                }
                className="action-button"
              >
                {favouriteList.findIndex((item) => item.imdbID === MovieId) ===
                -1 ? (
                  <p>Add to Favourites</p>
                ) : (
                  <p>Remove from favourites</p>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
}
