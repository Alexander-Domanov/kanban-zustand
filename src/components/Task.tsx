import s from "./Task.module.css"
import classNames from "classnames";
import {useStore} from "../store";

export const Task: React.FC<any> = ({title}) => {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    )
    const deleteTask = useStore((store) => store.deleteTask)

    return (
        <div className={s.task}>
            <div>{title}</div>
            <div className={s.bottomWrapper}>
                <div>
                    <svg onClick={() => deleteTask(task?.title)} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24"
                         fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </div>
                <div className={classNames(s.status, s[task!.state])}>{task!.state}</div>
            </div>
        </div>
    )
}

