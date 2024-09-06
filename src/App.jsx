// REACT UTILITIES
import { useState } from "react";

// COMPONENTS
import NewProject from "./components/NewProject.jsx";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const projectSelected = !!projectsState.selectedProject; // Check if a project is selected

  function handleStartAddProject() {
    setProjectState(prevState =>{
      return{
        selectedProjectId: null,
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject/>
  }else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {/* <NewProject /> */}
       {content} 
    </main>
  );
}

export default App;
