export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="group flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-4 h-4 accent-red-500"
        />
        <div>
          <p className={task.completed ? 'line-through text-gray-400' : ''}>
            {task.text}
          </p>
          {task.date && (
            <p className="text-xs text-gray-400">{task.date}</p>
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