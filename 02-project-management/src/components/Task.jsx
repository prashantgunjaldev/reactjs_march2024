import NewTask from "./NewTask";

export default function Task({ tasks, onNewTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onNewTask={onNewTask} />
      <ul>
        {tasks.map((t) => (
          <li key={t.id} className="felx justify-between my-4">
            <span>{t.task}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => {
                onDeleteTask(t.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
