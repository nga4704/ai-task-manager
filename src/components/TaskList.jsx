import TaskItem from './TaskItem'

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-400">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          className="w-24 mx-auto mb-4 opacity-70"
        />
        No tasks here 🎉
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}