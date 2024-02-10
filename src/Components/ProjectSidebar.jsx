import Button from "./Button";

export default function ProjectSidebar({onclick, onSelectProject,selectedProject}){

    return(
        <aside  className=" w-2/3 px-8 py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className=" mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick = {onclick}>+ Add Project</Button>
            </div>
            <ul>
                {onSelectProject.map((prevProject) => (
                    <li key={prevProject.id}>
                        <button onClick={() => selectedProject(prevProject.id)} className=" w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                            {prevProject.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
};