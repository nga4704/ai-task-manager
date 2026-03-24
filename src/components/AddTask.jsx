import { useState } from 'react'

export default function AddTask({ addTask, onClose }) {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('medium')
  const [note, setNote] = useState('')

  const handleAdd = () => {
    addTask(text, date, priority, note)
    setText('')
    setDate('')
    setPriority('medium')
    setNote('')
    onClose() // 🔥 đóng form
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6 space-y-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="w-full p-2 outline-none"
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />

      <div className="flex gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-2 py-1 rounded"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note (optional)..."
        className="w-full p-2 border rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}