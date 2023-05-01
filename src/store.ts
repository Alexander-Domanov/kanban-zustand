import {create} from "zustand";

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'PLANNED'}],
    addTask: (title: any, state: any) =>
        set((store: any) => ({tasks: [...store.tasks, {title, state}]}))
})

export const useStore = create(store)