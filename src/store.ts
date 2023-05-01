import {create} from "zustand";

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'PLANNED'}],
    draggedTask: null,
    addTask: (title: any, state: any) =>
        set((store: any) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title: any) =>
        set((store: any) => ({
            tasks: store.tasks.filter((task: any) => task.title !== title),
        })),
    setDraggedTask: (title: any) => set({draggedTask: title}),
    moveTask: (title: any, state: any) =>
        set((store: any) => (
            {tasks: store.tasks.map((task: any) => task.title === title ? {title, state} : task)}
        ))

})

export const useStore = create(store)