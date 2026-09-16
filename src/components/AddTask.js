import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

function AddTask() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() !== '') {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
            <input
                type="text"
                placeholder="Ajouter une nouvelle tâche..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ padding: '10px', flexGrow: 1, borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Ajouter
            </button>
        </form>
    );
}

export default AddTask;
