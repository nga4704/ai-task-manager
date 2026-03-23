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
const addTask = (text, date) => {
    if (!text.trim()) return
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date: date || null
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
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">{activeTab}</h1>
        <AddTask addTask={addTask} />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}