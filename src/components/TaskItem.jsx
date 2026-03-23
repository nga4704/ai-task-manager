import { FaTrash } from "react-icons/fa";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between border-b py-3 group">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-4 h-4"
        />

        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {task.title}
        </span>

      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500"
      >
        <FaTrash />
      </button>

    </div>
  );
}