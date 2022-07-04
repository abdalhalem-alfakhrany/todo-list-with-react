import { v4 as uuidV4 } from 'uuid'
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import './styles/main.css'

import TasksList from './components/tasks_list.jsx'
import TaskInput from './components/task_input.jsx'


const App = () => {
    const [tasks, setTasks] = useState([{ id: uuidV4, title: 'task1', done: false }]);

    const toggleTaksDone = (taskId) =>
        setTasks(tasks.map((task) => (task.id == taskId) ? { ...task, done: !task.done } : task));

    const changeTaskTitle = (taskId, newTitle) =>
        setTasks(tasks.map((task) => (task.id == taskId) ? { ...task, title: newTitle } : task));

    const addTask = (title) =>
        setTasks([{ id: uuidV4(), title: title, done: false }, ...tasks]);

    const removeTask = (taskId) =>
        setTasks(tasks.filter((task) => task.id !== taskId));

    return <>
        <TaskInput
            addTask={addTask}
        ></TaskInput>
        <TasksList
            tasks={tasks}
            toggleTaksDone={toggleTaksDone}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask}
        ></TasksList>
    </>;
}

createRoot(document.getElementById('root')).render(<App />);