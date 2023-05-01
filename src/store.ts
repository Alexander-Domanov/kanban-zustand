import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

const store = (set: any) => ({
    tasks: [],
    draggedTask: null,
    addTask: (title: any, state: any) =>
        set((store: any) => ({tasks: [...store.tasks, {title, state}]}),
            false,
            "addTask"
        ),
    deleteTask: (title: any) =>
        set((store: any) => ({
                tasks: store.tasks.filter((task: any) => task.title !== title),
            }),
            false,
            "deleteTask"
        ),
    setDraggedTask: (title: any) => set({draggedTask: title},
        false,
        "moveTask"
    ),
    moveTask: (title: any, state: any) =>
        set((store: any) => (
                {tasks: store.tasks.map((task: any) => task.title === title ? {title, state} : task)}
            ),
            false,
            "moveTask"
        )

})

export const useStore = create(persist(devtools(store), {name: "store"}))