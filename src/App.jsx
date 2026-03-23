import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [activeTab, setActiveTab] = useState('inbox')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text, date, priority, note) => {
    if (!text.trim()) return
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date: date || null,
      priority: priority || 'medium', // low | medium | high
      note: note || '',
      createdAt: Date.now()
    }])
  }
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const today = new Date().toISOString().split('T')[0]

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'inbox') return !task.date && !task.completed
    if (activeTab === 'today') return task.date === today && !task.completed
    if (activeTab === 'upcoming') return task.date && task.date > today && !task.completed
    if (activeTab === 'completed') return task.completed
    return true
  })

  return (
    <div className="flex h-screen bg-[#f4f5f7] text-gray-800">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tasks={tasks} />

      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="bg-white px-6 py-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-semibold capitalize">{activeTab}</h1>
          <div className="text-sm text-gray-400">{filteredTasks.length} tasks</div>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-auto">
          <AddTask addTask={addTask} />
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  )
}