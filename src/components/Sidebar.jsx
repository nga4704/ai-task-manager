export default function Sidebar({ activeTab, setActiveTab }) {
  const itemClass = (tab) =>
    `p-2 rounded cursor-pointer ${activeTab === tab ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`

  return (
    <div className="w-64 bg-white p-4 border-r">
      <h2 className="text-xl font-bold text-red-500 mb-6">Todoist</h2>
      <ul className="space-y-2">
        <li className={itemClass('inbox')} onClick={() => setActiveTab('inbox')}>Inbox</li>
        <li className={itemClass('today')} onClick={() => setActiveTab('today')}>Today</li>
        <li className={itemClass('upcoming')} onClick={() => setActiveTab('upcoming')}>Upcoming</li>
        <li className={itemClass('completed')} onClick={() => setActiveTab('completed')}>Completed</li>
      </ul>
    </div>
  )
}