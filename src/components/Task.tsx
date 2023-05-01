import s from "./Task.module.css"
import classNames from "classnames";
import {useStore} from "../store";


export const Task: React.FC<any> = ({title}) => {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    )

    return (
        <div className={s.task}>
            <div>{title}</div>
            <div className={s.bottomWrapper}>
                <div></div>
                <div className={classNames(s.status, s[task!.state])}>{task!.state}</div>
            </div>
        </div>
    )
}