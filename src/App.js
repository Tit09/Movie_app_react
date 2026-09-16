import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDescription from './components/MovieDescription'; // Composant à créer ensuite

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: "Un voleur qui s'infiltre dans les rêves des autres pour dérober leurs secrets.",
    posterURL: 'https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    note: 4.8,
    trailerUrl: 'https://youtube.com' // Lien vidéo intégré 🎬
  },
  {
    id: 2,
    title: 'Interstellar',
    description: "Un groupe d'explorateurs traverse un trou de ver pour sauver l'humanité.",
    posterURL: 'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    note: 4.9,
    trailerUrl: 'https://youtube.com' // Lien vidéo intégré 🎬
  },
  {
    id: 3,
    title: 'Le Voyage de Chihiro',
    description: "Une jeune fille se retrouve piégée dans un monde peuplé d'esprits.",
    posterURL: 'https://image.tmdb.org/t/p/w300/gDbmZ8lLSPd2LGeCf3wR6jvzGXk.jpg',
    note: 4.7,
    trailerUrl: 'https://youtube.com' // Lien vidéo intégré 🎬
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterNote, setFilterNote] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [
      ...prevMovies,
      { ...newMovie, id: Date.now() },
    ]);
  };

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(filterTitle.toLowerCase());
      const matchesNote = movie.note >= filterNote;
      return matchesTitle && matchesNote;
    });
  }, [movies, filterTitle, filterNote]);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Page principale : Accueil de l'application */}
          <Route
            path="/"
            element={
              <>
                <header className="app-header">
                  <h1>🎬 Mon Cinéma</h1>
                  <p>Retrouve et ajoute tes films et séries préférés</p>
                </header>

                <main>
                  <AddMovieForm onAddMovie={handleAddMovie} />

                  <Filter
                    filterTitle={filterTitle}
                    filterNote={filterNote}
                    onFilterTitleChange={setFilterTitle}
                    onFilterNoteChange={setFilterNote}
                  />

                  <MovieList movies={filteredMovies} />
                </main>
              </>
            }
          />

          {/* Nouvelle route dynamique pour la description et le trailer */}
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
