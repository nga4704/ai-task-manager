import { useState } from "react";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mt-6">

      <input
        className="border rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-red-400"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-red-500 text-white px-4 rounded hover:bg-red-600"
      >
        Add
      </button>

    </div>
  );
}