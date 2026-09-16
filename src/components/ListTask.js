import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';
import Task from './Task';

function ListTask() {
    const dispatch = useDispatch();
    const { tasks, filter } = useSelector((state) => state.todo);

    // Filtrer les tâches selon la sélection de l'utilisateur
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true; // 'all'
    });

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => dispatch(setFilter('all'))} style={{ padding: '5px 10px', background: filter === 'all' ? '#007bff' : '#ccc', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Toutes</button>
                <button onClick={() => dispatch(setFilter('done'))} style={{ padding: '5px 10px', background: filter === 'done' ? '#28a745' : '#ccc', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Faites</button>
                <button onClick={() => dispatch(setFilter('notDone'))} style={{ padding: '5px 10px', background: filter === 'notDone' ? '#dc3545' : '#ccc', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>À faire</button>
            </div>

            <div>
                {filteredTasks.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: '#aaa' }}>Aucune tâche à afficher.</p>
                ) : (
                    filteredTasks.map((task) => <Task key={task.id} task={task} />)
                )}
            </div>
        </div>
    );
}

export default ListTask;
