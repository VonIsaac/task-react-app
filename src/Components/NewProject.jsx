import Input from "./Input.jsx";
import { useRef, useContext } from "react";
import Modal from "./Modal";
import { TaskConcepts } from "../../TaskConcepts/TaskContext.jsx";


export default function NewProject({onAdd}){
    const {onCancelTask} = useContext(TaskConcepts)

    const modalOpen = useRef();
    const inputRef = useRef();
    const discriptionRef = useRef();
    const dueDateRef = useRef();

    
    function handleSave(){
        const inputRefs = inputRef.current.value;
        const discriptionRefs = discriptionRef.current.value;
        const dueDateRefs = dueDateRef.current.value;

        if(inputRefs.trim() === "" || discriptionRefs.trim() === "" || dueDateRefs.trim() === ""){
            modalOpen.current.open();
            return;
        };

        onAdd({
            title:inputRefs,
            discription:discriptionRefs,
            dueDate:dueDateRefs,
        })
    };

    return (

       <>
            <Modal ref={modalOpen} button ="Close">
                <h2 className=" text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className=" text-stone-600 mb-4">Oops.... looks like you forgot to enter value</p>
                <p className=" text-stone-600 mb-4">Please make sure to provide a valid value for every input field</p>

            </Modal>
            <div className=" w-[35rem] mt-16">
                <menu className=" flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancelTask} className=" text-stone-800 hover:text-slate-950">Cancel</button></li>
                    <li><button onClick={handleSave} className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input  type = "text" label= "Input" ref={inputRef} />
                    <Input label= "Discription" textarea  ref={discriptionRef} />
                    <Input  type = "date" label= "Due Date" ref={dueDateRef}/>
                </div>
            </div>
       </>
    )
};