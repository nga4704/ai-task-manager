import { FaInbox, FaCalendarDay, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

export default function Sidebar({ activeTab, setActiveTab, tasks }) {
  const itemClass = (tab) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
      activeTab === tab
        ? 'bg-red-100 text-red-500 font-semibold'
        : 'hover:bg-gray-100'
    }`

  return (
    <div className="w-72 bg-white border-r p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-8">Todoist</h2>

      <div className="space-y-2">
        <div className={itemClass('inbox')} onClick={() => setActiveTab('inbox')}>
          <FaInbox /> Inbox
        </div>

        <div className={itemClass('today')} onClick={() => setActiveTab('today')}>
          <FaCalendarDay /> Today
        </div>

        <div className={itemClass('upcoming')} onClick={() => setActiveTab('upcoming')}>
          <FaCalendarAlt /> Upcoming
        </div>

        <div className={itemClass('completed')} onClick={() => setActiveTab('completed')}>
          <FaCheckCircle /> Completed
        </div>
      </div>

      {/* IMAGE DECOR */}
      {/* <div className="mt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="illustration"
          className="w-32 mx-auto opacity-80"
        />
      </div> */}
    </div>
  )
}
