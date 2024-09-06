// REACT UTILITIES
import { useState } from "react";

// COMPONENTS
import NewProject from "./components/NewProject.jsx";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProjetct from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const projectSelected = !!projectsState.selectedProjectId; // Check if a project is selected

  function handleStartAddProject() {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject(projectData) {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  };

  function handleAddProject(projectData) {
    setProjectState(prevState=>{
      const newProject={
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      }
    })
  }


  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        />
        <SelectedProjetct/>
      {/* <NewProject /> */}
       {/* {content}  */}
    </main>
  );
}

export default App;
