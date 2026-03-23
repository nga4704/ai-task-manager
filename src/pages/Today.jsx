import TaskList from "../components/TaskList";

export default function Today() {
  const today = new Date().toDateString();

  return (
    <div>
      <h2 className="text-xl mb-4">Today</h2>
      <TaskList
        filter={(task) =>
          new Date(task.date).toDateString() === today
        }
      />
    </div>
  );
}