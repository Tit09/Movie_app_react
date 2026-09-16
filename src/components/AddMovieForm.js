import React, { useState } from 'react';

const emptyForm = { title: '', description: '', posterURL: '', note: '' };

function AddMovieForm({ onAddMovie }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    onAddMovie({
      title: form.title.trim(),
      description: form.description.trim(),
      posterURL: form.posterURL.trim() || 'https://placehold.co/300x450?text=Pas+d%27affiche',
      note: parseFloat(form.note) || 0,
    });

    setForm(emptyForm);
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Ajouter un film</h2>

      <input
        type="text"
        placeholder="Titre"
        value={form.title}
        onChange={handleChange('title')}
        required
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={handleChange('description')}
        rows={2}
      />

      <input
        type="url"
        placeholder="URL de l'affiche (posterURL)"
        value={form.posterURL}
        onChange={handleChange('posterURL')}
      />

      <input
        type="number"
        placeholder="Note (0 à 5)"
        min="0"
        max="5"
        step="0.1"
        value={form.note}
        onChange={handleChange('note')}
      />

      <button type="submit">+ Ajouter</button>
    </form>
  );
}

export default AddMovieForm;
