export default function TaskItem({ task, toggleTask, deleteTask }) {
  const priorityColor = {
    low: 'text-blue-500',
    medium: 'text-yellow-500',
    high: 'text-red-500'
  }

  return (
    <div className="group flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 accent-red-500"
        />

        <div>
          <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.text}
          </p>

          <div className="flex gap-3 text-xs mt-1">
            {task.date && <span>📅 {task.date}</span>}
            {task.priority && (
              <span className={priorityColor[task.priority]}>
                ● {task.priority}
              </span>
            )}
          </div>

          {task.note && (
            <p className="text-xs text-gray-400 mt-1">📝 {task.note}</p>
          )}
        </div>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  )
}