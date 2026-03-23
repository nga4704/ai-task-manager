import TaskList from "../components/TaskList";

export default function Upcoming() {
  const today = new Date();

  return (
    <div>
      <h2 className="text-xl mb-4">Upcoming</h2>
      <TaskList
        filter={(task) => new Date(task.date) > today}
      />
    </div>
  );
}