import React from 'react';
import { Link } from 'react-router-dom'; // Importation nécessaire pour la navigation 🔗

function MovieCard({ movie }) {
  // On récupère également l'id pour construire l'URL unique du film
  const { id, title, description, posterURL, note } = movie;

  return (
    // Le composant Link entoure la carte et redirige vers /movie/1, /movie/2, etc.
    <Link to={`/movie/${id}`} className="movie-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </Link>
  );
}

export default MovieCard;
