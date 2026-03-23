import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0)
    return (
      <p className="text-gray-400">
        No tasks yet. Add one!
      </p>
    );

  return (
    <div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}