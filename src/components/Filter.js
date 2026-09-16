import React from 'react';

function Filter({ filterTitle, filterNote, onFilterTitleChange, onFilterNoteChange }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={filterTitle}
        onChange={(e) => onFilterTitleChange(e.target.value)}
      />

      <label className="note-filter">
        Note minimale : {filterNote}
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filterNote}
          onChange={(e) => onFilterNoteChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
