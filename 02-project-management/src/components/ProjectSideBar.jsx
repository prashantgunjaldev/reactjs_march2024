import Button from "./Button";

export default function ProjectSideBar({
  onStartAddProj,
  projects,
  selectedProjectId,
  handleSelectProj,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProj}> + Add Project</Button>
      <ul>
        {projects.map((p) => {
          let cssClasses =
            "w-full text-left py-1 px-2 rounded-sm hover:text-stone-200 hover:bg-stone-800";
          if (p.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-400";
          } else {
            cssClasses += "bg-stone-600";
          }
          return (
            <li key={p.id}>
              <button
                onClick={() => {
                  handleSelectProj(p.id);
                }}
                className={cssClasses}
              >
                {p.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
