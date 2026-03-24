import { FaRegCircle, FaCheckCircle, FaTrash } from "react-icons/fa"

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="group flex items-start justify-between bg-white px-4 py-3 rounded-xl hover:bg-gray-50 transition">

      {/* LEFT */}
      <div className="flex items-start gap-3">

        {/* CHECK ICON */}
        <button
          onClick={() => toggleTask(task.id)}
          className="mt-1 text-gray-400 hover:text-red-500 transition"
        >
          {task.completed ? (
            <FaCheckCircle className="text-red-500" />
          ) : (
            <FaRegCircle />
          )}
        </button>

        {/* CONTENT */}
        <div className="space-y-1">

          {/* TEXT */}
          <p
            className={`text-sm ${
              task.completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.text}
          </p>

          {/* META INFO */}
          <div className="flex items-center gap-3 text-xs text-gray-400">

            {task.date && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                {task.date}
              </span>
            )}

            {task.priority && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                {task.priority}
              </span>
            )}
          </div>

          {/* NOTE */}
          {task.note && (
            <p className="text-xs text-gray-400">
              {task.note}
            </p>
          )}
        </div>
      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition"
      >
        <FaTrash size={14} />
      </button>
    </div>
  )
}