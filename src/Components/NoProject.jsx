import taskImg from '../assets/image.svg';
import Button from './Button';
export default function NoProject({onclick}){

    return(
        <div className=" mt-24 text-center w-2/3">
            <img src= {taskImg} alt="Empty task" className=' w-44 h-44 object-contain mx-auto' />
            <h2 className=' text-xl font-bold text-stone-500  my-4'>No Project Selected</h2>
            <p className=' text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className=' mt-4'>
                <Button onClick = {onclick}>Creat New Project</Button>
            </p>
        </div>
    )       
};