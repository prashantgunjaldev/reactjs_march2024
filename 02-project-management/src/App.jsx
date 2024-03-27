import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";

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
    console.log("handleSelectProj", id);
  }

  function handleAddProject(newProjData) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, { ...newProjData, id: Math.random() }],
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

  let content = <NoProjectSelected onStartAddProj={handleStartProj} />;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
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
