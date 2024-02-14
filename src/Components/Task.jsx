import NewTask from "./NewTask.jsx";
import { TaskConcepts } from "../../TaskConcepts/TaskContext.jsx";
import { useContext } from "react";
export default function Task(){

    const {onDeleteTask, tasking} = useContext(TaskConcepts)

    return(
        <section>
            <h2 className=" text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask  />
          
          {tasking.length === 0 && (
           <p className=" text-stone-800 my-4">This project does not have any task yet.</p>)}
     
           {tasking.length > 0 &&(
            <ul className=" p-4 mt-8 rounded-md bg-stone-100">
                {tasking.map((tasking) => (
                <li key={tasking.id} className=" flex justify-between my-4">
                    <span>{tasking.text}</span>
                    <button onClick={() =>onDeleteTask(tasking.id)} className=" text-stone700 hover:text-red-500">Clear</button>
                </li>
                    
               ))}
            </ul>
            )} 
        </section>
    )
}

