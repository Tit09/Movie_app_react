import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTaskDescription } from '../redux/taskSlice';

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const handleSave = () => {
    if (newText.trim() !== '') {
      dispatch(editTaskDescription({ id: task.id, newDescription: newText }));
      setIsEditing(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', padding: '10px', background: '#333', borderRadius: '5px', color: '#fff' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTaskStatus(task.id))}
      />

      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ padding: '5px', borderRadius: '3px', border: 'none' }}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', flexGrow: 1 }}>
          {task.description}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleSave} style={{ background: '#28a745', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Enregistrer</button>
      ) : (
        <button onClick={() => setIsEditing(true)} style={{ background: '#ffc107', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Modifier</button>
      )}
    </div>
  );
}

export default Task;
