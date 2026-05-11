import React from "react";

export default function Tasklist({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask); 
    }
    return (
        <div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <span>{task.task}</span>
                            <small>({task.priority}, {task.category})</small>
                        </div>
                        <div>
                            <button onClick={() => toggleComplete(index)}>{task.completed ? 'Undo' : 'Complete'}</button>
                            <button onClick={() => deleteTask(index)}>Delete</button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
