import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDescription({ movies }) {
    // 1. Récupérer l'ID dynamique de l'URL
    const { id } = useParams();

    // 2. Trouver le film correspondant (on compare des chaînes/nombres proprement)
    const movie = movies.find((m) => String(m.id) === String(id));

    // Si le film n'existe pas dans la liste
    if (!movie) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', color: '#fff' }}>
                <h2>Film introuvable !</h2>
                <Link to="/" style={{ color: '#007bff' }}>Retourner à l'accueil</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: '#fff', textAlign: 'left' }}>
            {/* Bouton de retour exigé par les instructions */}
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                ⬅️ Retourner à l'accueil
            </Link>

            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{movie.title}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', color: '#ccc' }}>
                <strong>Description :</strong> {movie.description}
            </p>

            {/* Zone de la bande-annonce vidéo intégrée */}
            {movie.trailerUrl ? (
                <div style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0, borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                    <iframe
                        style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
                        src={movie.trailerUrl}
                        title={`Bande-annonce de ${movie.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p style={{ color: '#aaa', fontStyle: 'italic' }}>Aucune bande-annonce disponible pour ce film.</p>
            )}
        </div>
    );
}

export default MovieDescription;
