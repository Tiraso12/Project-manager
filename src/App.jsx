// REACT UTILITIES
import { useState } from "react";

// COMPONENTS
import NewProject from "./components/NewProject.jsx";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProjetct from "./components/SelectedProject.jsx";

  /**
   * The main App component.
   * It renders the sidebar, and depending on the state,
   * it will render either the SelectedProject, NewProject or NoProjectSelected component.
   * The state is managed by the useState hook.
   * The state is an object with two properties: selectedProjectId and projects.
   * The selectedProjectId is the id of the currently selected project, or undefined if no project is selected.
   * The projects is an array of objects, each representing a project.
   * The state is updated by the handleSelectProject, handleDeleteProject, handleStartAddProject and handleAddProject functions.
   * The handleCancelAddProject function is used to cancel the addition of a new project.
   */
function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  });

  function handleAddTask(text) {
    setProjectState(prevState=>{
      const taskId= Math.random();
      const newTask={
        text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(params) {
    
  }

  
  /**
   * Handles the selection of a project from the sidebar. 
   * It updates the state to reflect the selected project id.
   * @param {number} id - the id of the selected project
   */
  function handleSelectProject(id) {
    setProjectState(prevState =>{
      console.log(prevState);
      return{
        ...prevState,
        selectedProjectId: id,
      }
      
    })
  }

  /**
   * Handles the deletion of a project.
   * It removes the project from the state and sets the selectedProjectId to undefined,
   * so the "NoProjectSelected" component is displayed again.
   */
  function handleDeleteProject() {
    setProjectState(prevState =>{
      console.log(prevState);
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
      }
    })
  }
  
  /**
   * Handles the start of adding a new project.
   * It sets the selectedProjectId to null, so the "NoProjectSelected" component is displayed again.
   */
  function handleStartAddProject() {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  /**
   * Handles the cancellation of adding a new project.
   * It sets the selectedProjectId to undefined, so the "NoProjectSelected" component is displayed again.
   */
  function handleCancelAddProject() {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  };

  /**
   * Handles the addition of a new project.
   * It adds the new project to the state and sets the selectedProjectId to undefined,
   * so the "NoProjectSelected" component is displayed again.
   * @param {object} projectData - contains the data of the new project
   */
  function handleAddProject(projectData) {
    setProjectState(prevState=>{
      const projectId= Math.random();
      const newProject={
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      }
    })
  }
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProjetct
                   project={selectedProject} 
                   onDeleteProject = {handleDeleteProject}
                   onAddTask={handleAddTask}
                   onDeleteTask={handleDeleteTask}
                   tasks={projectsState.tasks}
                />

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
        onSelectProject = {handleSelectProject}
        />
       {content} 
    </main>
  );
}

export default App;
