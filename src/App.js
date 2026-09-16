import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDescription from './components/MovieDescription';
import AddTask from './components/AddTask'; // Import de la ToDo 📝
import ListTask from './components/ListTask'; // Import de la ToDo 📝

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: "Un voleur qui s'infiltre dans les rêves des autres pour dérober leurs secrets.",
    posterURL: 'https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    note: 4.8,
    trailerUrl: 'https://youtube.com' // Vrai lien embed 🎬
  },
  {
    id: 2,
    title: 'Interstellar',
    description: "Un groupe d'explorateurs traverse un trou de ver pour sauver l'humanité.",
    posterURL: 'https://tmdb.org',
    note: 4.9,
    trailerUrl: 'https://youtube.com' // Vrai lien embed 🎬
  },
  {
    id: 3,
    title: 'Le Voyage de Chihiro',
    description: "Une jeune fille se retrouve piégée dans un monde peuplé d'esprits.",
    posterURL: 'https://image.tmdb.org/t/p/w300/gDbmZ8lLSPd2LGeCf3wR6jvzGXk.jpg',
    note: 4.7,
    trailerUrl: 'https://youtube.com' // Vrai lien embed 🎬
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
          {/* Page principale : Accueil (Films + ToDo List) */}
          <Route
            path="/"
            element={
              <>
                <header className="app-header">
                  <h1>🎬 Mon Cinéma</h1>
                  <p>Retrouve et ajoute tes films et séries préférés</p>
                </header>

                <main>
                  {/* --- SECTION DES FILMS --- */}
                  <AddMovieForm onAddMovie={handleAddMovie} />

                  <Filter
                    filterTitle={filterTitle}
                    filterNote={filterNote}
                    onFilterTitleChange={setFilterTitle}
                    onFilterNoteChange={setFilterNote}
                  />

                  <MovieList movies={filteredMovies} />
                  
                  {/* --- INTERFACE TODO LIST REDUX --- */}
                  <section style={{ borderTop: '2px solid #444', paddingTop: '40px', marginTop: '50px', textAlign: 'left' }}>
                    <h2 style={{ color: '#fff', marginBottom: '10px' }}>📝 Ma ToDo List (Redux)</h2>
                    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Ajoute, filtre et modifie tes tâches quotidiennes</p>
                    <AddTask />
                    <ListTask />
                  </section>
                </main>
              </>
            }
          />

          {/* Route dynamique pour la description et le trailer */}
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
