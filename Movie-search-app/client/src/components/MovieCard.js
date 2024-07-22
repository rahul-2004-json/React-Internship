import React from "react";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="movie-card-container">
      <div className="movie-img">
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <div className="movie-info">
        <p>{movie?.Title}</p>
        <p>{movie?.Year}</p>
      </div>
      <div className="btn-cont">
        <button
          onClick={() => navigate(`/movie-detail/${movie?.imdbID}`)}
          className="details-btn"
        >
          Get Details
        </button>
      </div>
    </div>
  );
}
