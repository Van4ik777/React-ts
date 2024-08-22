import { Todo } from '../../types/todo.interface';
import './todoitem.css';



interface Props{
    onSwichStatus: (id: number) => void
    onDeleteItem: (id: number) => void
    task: Todo
}

export const ToDoItem: React.FC<Props> = ({onSwichStatus, onDeleteItem, task}) => {

    const formattedDate = task.date ? new Date(task.date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';
    return (
        <div className='task-container'>
            <h2>{task.title}</h2>

            <p>{task.text}</p>
            <p className='task-date'>{formattedDate}</p>
            <label 
                className={`label-container ${task.isCompleted ? 'completed' : 'not-completed'}`}>
                {task.isCompleted ? 'Completed' : 'Not Completed'}
            </label>
            
            <div className="task-buttons">
                <button onClick={() => onSwichStatus(task.id)}>готово</button>
                <button className="secondary" onClick={() => onDeleteItem(task.id)}>Удалить</button>
            </div>
            
        </div>
    )
}
