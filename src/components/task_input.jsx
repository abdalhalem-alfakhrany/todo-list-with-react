import React, { useState } from "react";
import '../styles/task_input.css'

export default (props) => {
    const [taskTtile, setTaskTitle] = useState('');
    return <div className="task-input-wrapper">
        <input
            className="task-input-field" value={taskTtile} onChange={(event) => setTaskTitle(event.target.value)}
            placeholder="task title"></input>
        <button className="task-input-submit" onClick={() => { (taskTtile === "") ? "" : props.addTask(taskTtile); setTaskTitle("") }} >add</button>
    </div>
}