import './Todotasks.css';

interface Props{
    title: string
    text: string
}

export const ToDoTasks: React.FC<Props> = ({ title, text }) => {
    return (
        <div className='task-container'>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="task-buttons">
                <button>готово</button>
                <button className="secondary">Удалить</button>
            </div>
        </div>
    )
}
