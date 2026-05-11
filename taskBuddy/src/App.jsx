import React from "react";
import TaskForm from "./components/TaskForm";
import Tasklist from "./components/Tasklist";
import ProgressTracker from "./components/ProgressTracker";

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newTasks);

  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return(
    <div>
      <header>
        <h1>TaskBuddy</h1>
        <p>Your friendly task manager</p>
      </header>
      <TaskForm addTask = {addTasks} />
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <ProgressTracker tasks = {tasks} />
    </div>
  )
}