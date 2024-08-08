import './todoitem.css';

interface Props{
    id: number
    title: string
    text: string
    isCompleted: boolean
    userId: number
}

export const ToDoItem: React.FC<Props> = ({ id, title, text, isCompleted, userId}) => {
    return (
        <div className='task-container'>
            <h2>{title}</h2>

            <p>{text}</p>

            <label 
                className={`label-container ${isCompleted ? 'completed' : 'not-completed'}`}>
                {isCompleted ? 'Completed' : 'Not Completed'}
            </label>
            
            <div className="task-buttons">
                <button>готово</button>
                <button className="secondary">Удалить</button>
            </div>
            
        </div>
    )
}
