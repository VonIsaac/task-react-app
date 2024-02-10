import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const ModalTask = forwardRef(  function ModalTask({children, button}, ref){
    const modalTask = useRef();

    useImperativeHandle(ref,() => {
        return{
            open(){
                modalTask.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={modalTask} className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-1/4">
            {children}
            <form method="dialog" className=" mt-4 text-right">
                <Button>{button}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-task-root')
    )
})

export default ModalTask