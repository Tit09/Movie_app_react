# Mon Cinéma - Checkpoint React Hooks

Application React permettant de présenter et gérer une liste de films/séries préférés.

## Fonctionnalités

- Affichage d'une liste de films (titre, description, affiche, note)
- Ajout d'un nouveau film via un formulaire
- Filtrage des films par titre et par note minimale
- Utilisation des hooks React : `useState`, `useMemo`

## Composants

- `MovieCard` : affiche un film individuel (props)
- `MovieList` : affiche la liste filtrée des films
- `Filter` : champ de recherche par titre + slider de note minimale
- `AddMovieForm` : formulaire d'ajout d'un film

## Installation

```bash
npm install
npm start
```

L'app s'ouvre sur http://localhost:3000
