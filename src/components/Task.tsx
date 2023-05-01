import s from  "./Task.module.css.module.css"
export const Task: React.FC<any> = ({state}) => {
    return (
        <div className={s.task}>
            {state}
        </div>
    )
}