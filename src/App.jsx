import ProjectSidebar from './Components/ProjectSidebar.jsx';
import NewProject from './Components/NewProject.jsx';
import NoProject from './Components/NoProject.jsx';
import SelectedProject from './Components/SelectedProject.jsx';
import { TaskConcepts } from '../TaskConcepts/TaskContext.jsx';
import { useState } from 'react';

function App() {
  const [projectSatate, setProjectState] = useState({
    selectedProject: undefined,
    project: [],
    task: [],
  });

  function handleAddTask(text){
    setProjectState(prevAddProject => {
      const taskId = Math.random()
      const newTask = {
         text:text,
         projectId: prevAddProject.selectedProject,
        id: taskId
      }

      return{
        ...prevAddProject,
        task: [...prevAddProject.task,newTask]
      }
    })
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProject: null,
      }
    });
  };


  function handleSelectProject(id){
    setProjectState((prevSelectProject) => {
      return{
        ...prevSelectProject, selectedProject:id
      }
    })
  }

  function handleDeleteProject(){
    setProjectState((prevDeleteProject) => {
      return{
        ...prevDeleteProject, 
        selectedProject:undefined
      }
    })
  }

  function handleAddProject(prevAdd){
    setProjectState((prevAddProject) => {
      const projectId = Math.random()
      const newProjectId = {
        ...prevAdd,
        id:projectId
      }

      return{
        ...prevAddProject,
        selectedProject: undefined,
        project: [...prevAddProject.project,newProjectId]
      }
    })
  };

  function handleDelete(){
    setProjectState(prevDelete => {
      return{
        ...prevDelete,
        selectedProject: undefined,
        project: prevDelete.project.filter((projects) => projects.id !== prevDelete.selectedProject)
      }
    })
  }


  function handleDeleteTask(id){
    setProjectState((prevDeleteTask) => {
      return{
        ...prevDeleteTask,
        task: prevDeleteTask.task.filter((task) => task.id !== id)
      }
    })
  }

  const selectedProjectIds = projectSatate.project.find(projects => projects.id === projectSatate.selectedProject);

  let content = <SelectedProject 
    project ={selectedProjectIds} 
    onDeleteProject = {handleDelete}
  />

  if(projectSatate.selectedProject === null){
    content = <NewProject onAdd = {handleAddProject} />
  }else if(projectSatate.selectedProject === undefined){
    content = <NoProject onclick={handleStartAddProject} />
  };

  const tskValue = {
    onAddTask: handleAddTask,
    onDeleteTask:handleDeleteTask,
    tasking: projectSatate.task,
    onclickStart: handleStartAddProject,
    selectedProject: handleSelectProject,
    onCancelTask: handleDeleteProject,
  }

  return (
    <>
    <TaskConcepts.Provider value={tskValue}>
     <main className=' h-screen my-8 flex gap-8'>
        <ProjectSidebar   
          onSelectProject = {projectSatate.project}
        />
        {content}
     </main>
     </TaskConcepts.Provider>
    </>
  )
};

export default App
