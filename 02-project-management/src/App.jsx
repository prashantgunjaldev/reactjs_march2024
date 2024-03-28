import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  //all project & related states &functions will be managed here
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProj() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProj(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(newProjData) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [
          ...prev.projects,
          { ...newProjData, id: Math.random(), tasks: [] },
        ],
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((p) => p.id != id),
      };
    });
  }

  function handleNewTask(task) {
    const cloned = { ...projectState };
    const i = projectState.projects.findIndex(
      (p) => p.id === projectState.selectedProjectId
    );
    cloned.projects[i].tasks.push({ task, id: Math.random() });
    setProjectState(cloned);
  }

  function handleDeleteTask(id) {
    const cloned = { ...projectState };
    const i = projectState.projects.findIndex(
      (p) => p.id === projectState.selectedProjectId
    );
    cloned.projects[i].tasks = cloned.projects[i].tasks.filter(
      (t) => t.id != id
    );
    setProjectState(cloned);
  }

  let content = <NoProjectSelected onStartAddProj={handleStartProj} />;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  }

  if (projectState.selectedProjectId) {
    const project = projectState.projects.find(
      (p) => p.id === projectState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={project}
        onDelete={handleDeleteProject}
        onNewTask={handleNewTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProj={handleStartProj}
        selectedProjectId={projectState.selectedProjectId}
        projects={projectState.projects}
        handleSelectProj={handleSelectProj}
      />
      {content}
    </main>
  );
}

export default App;
