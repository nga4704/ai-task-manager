import TaskItem from './TaskItem'

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-gray-400">No tasks yet</p>
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