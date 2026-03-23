import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

export default function Inbox() {
  return (
    <div>
      <h2 className="text-xl mb-4">Inbox</h2>
      <AddTask />
      <TaskList filter={() => true} />
    </div>
  );
}