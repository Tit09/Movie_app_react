import React from 'react';

function MovieCard({ movie }) {
  const { title, description, posterURL, note } = movie;

  return (
    <div className="movie-card">
      <img
        src={posterURL}
        alt={title}
        className="movie-poster"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://placehold.co/300x450?text=Pas+d%27affiche';
        }}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p className="movie-description">{description}</p>
        <span className="movie-note">⭐ {note.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default MovieCard;
