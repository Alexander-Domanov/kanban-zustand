import {create} from "zustand";

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'PLANNED'}],
    addTask: (title: any, state: any) =>
        set((store: any) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title: any) =>
        set((store: any) => ({
            tasks: store.tasks.filter((task: any) => task.title !== title),
        })),
})

export const useStore = create(store)