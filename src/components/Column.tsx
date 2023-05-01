import s from "./Column.module.css"
import {Task} from "./Task";
import {useStore} from "../store";


export const Column: React.FC<any> = ({state}) => {
    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state))
    const addTask = useStore((store) => store.addTask)

    return (
        <div className={s.column}>
            <div className={s.titleWrapper}>
                <p>{state}</p>
                <button onClick={() => addTask('TestTask ' + state, state)}>Add</button>
            </div>
            {tasks.map((task: any, key) => (
                <Task title={task.title} key={key}></Task>
            ))}
        </div>
    )
}