import s from "./Column.module.css"
import {Task} from "./Task";
import {useStore} from "../store";
import {useState} from "react";

export const Column: React.FC<any> = ({state}) => {
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state))
    const addTask = useStore((store) => store.addTask)

    return (
        <div className={s.column}>
            <div className={s.titleWrapper}>
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>Add</button>
            </div>
            {tasks.map((task: any, key) => (
                <Task title={task.title} key={key}></Task>
            ))}
            {open &&
                <div className={s.Modal}>
                    <div className={s.modalContent}>
                        <input onChange={(e) => setText(e.target.value)} value={text}/>
                        <button onClick={() => {
                            addTask(text, state)
                            setText('')
                            setOpen(false)
                        }}> Submit
                        </button>
                    </div>
                </div>}
        </div>
    )
}