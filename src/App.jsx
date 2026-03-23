import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 max-w-2xl">

        <h2 className="text-2xl font-bold mb-6">
          Inbox
        </h2>

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <AddTask addTask={addTask} />

      </div>

    </div>
  );
}

export default App;