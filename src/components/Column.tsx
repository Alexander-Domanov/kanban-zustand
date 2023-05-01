import s from  "./Column.module.css"
export const Column: React.FC<any> = ({state}) => {
    return (
        <div className={s.column}>
            {state}
        </div>
    )
}