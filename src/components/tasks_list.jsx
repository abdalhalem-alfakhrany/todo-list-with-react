import React from 'react';
import '../styles/tasks_list.css';

export default (props) => {
    return (
        <div id="tasks-list">
            {props.tasks.map((task) =>
                <div key={task.id} className="task">
                    <input className="task-title"
                        onChange={() => props.changeTaskTitle(task.id, event.target.value)}
                        value={task.title} />
                    <button className="task-done"
                        onClick={() => props.toggleTaksDone(task.id)} >
                        {task.done ? 'mark as done' : 'not done'}
                    </button>
                    <button className="remove-task"
                        onClick={() => props.removeTask(task.id)}>
                        remove
                    </button>
                </div>
            )}
        </div >
    );
}