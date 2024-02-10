import { useState, useRef} from "react";
import ModalTask from "./ModalTask";
export default function NewTask({onAdd}){
    
    const modalDialog = useRef();
    const [enterdTask, setEnterdTask] = useState('');

    function handleEnterdTask(e){
        setEnterdTask(e.target.value)
    };

    function handleClickTask(){
        if(!enterdTask){
            modalDialog.current.open();
            return;
        }

        onAdd(enterdTask)
        setEnterdTask('');
        
    };

    return(
        <>
            <ModalTask ref={modalDialog} button = "Close">
                <h2 className=" font-bold uppercase mb-1 text-2xl">Empty Input</h2>
                <p className=" tracking-normal mb-2 text-stone-600">Please provide a value in the input field.</p>
                <p className=" tracking-wide mb-1 text-stone-600">The input field cannot be empty. Enter a valid value before proceeding.</p>
            </ModalTask>
            <div className=" flex items-center gap-4">
                <input type="text" className=" w-64 px-2 py-1 rounded-sm bg-stone-200"  onChange={handleEnterdTask} value={enterdTask}/>
                <button className=" text-stone-700 hover:text-stone-950 cursor-pointer" onClick={handleClickTask}>Add Task</button>
            </div>      
        </>
       
    )
};