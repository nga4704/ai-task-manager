import { FaInbox, FaCalendarDay, FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-50 border-r h-screen p-6">
      <h1 className="text-2xl font-bold text-red-500 mb-8">
        Todoist
      </h1>

      <ul className="space-y-3">

        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaInbox />
          Inbox
        </li>

        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaCalendarDay />
          Today
        </li>

      </ul>

      <div className="mt-10">
        <button className="flex items-center gap-2 text-red-500">
          <FaPlus />
          Add Project
        </button>
      </div>
    </div>
  );
}