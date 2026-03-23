import { useState } from 'react'

export default function AddTask({ addTask }) {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  const handleAdd = () => {
    addTask(text, date)
    setText('')
    setDate('')
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 p-2 border rounded"
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleAdd}
        className="bg-red-500 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  )
}