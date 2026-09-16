import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, description: 'Acheter le pain', isDone: false },
        { id: 2, description: 'Terminer le checkpoint Redux', isDone: true },
    ],
    filter: 'all', // Peut être : 'all', 'done', 'notDone'
};

const taskSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                description: action.payload,
                isDone: false,
            });
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTaskDescription: (state, action) => {
            const { id, newDescription } = action.payload;
            const task = state.tasks.find((t) => t.id === id);
            if (task) {
                task.description = newDescription;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleTaskStatus, editTaskDescription, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
