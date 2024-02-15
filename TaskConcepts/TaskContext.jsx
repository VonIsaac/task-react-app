import { createContext } from "react";

export const TaskConcepts = createContext({
    onAddTask: () => {},
    onDeleteTask: () => {},
    tasking: [],
    onclickStart: () => {},
    selectedProject: () => {},
    onCancelTask: () => {},
})