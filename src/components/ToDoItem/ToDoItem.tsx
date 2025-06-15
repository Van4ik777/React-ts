import React from 'react';
import { Todo } from '../../types/todo.interface';
import './todoitem.css';



interface Props{
    onSwitchStatus: (id: number) => void
    onDeleteItem: (id: number) => void
    task: Todo
}

export const ToDoItem: React.FC<Props> = (props:Props) => {
    const { onSwitchStatus, onDeleteItem, task } = props;

    return (
        <div className='task-container'>
            <h2>{task.title}</h2>

            <p>{task.text}</p>

            <label 
                className={`label-container ${task.isCompleted ? 'completed' : 'not-completed'}`}>
                {task.isCompleted ? 'Completed' : 'Not Completed'}
            </label>
            
            <div className="task-buttons">
                <button onClick={() => onSwitchStatus(task.id)}>готово</button>
                <button className="secondary" onClick={() => onDeleteItem(task.id)}>Удалить</button>
            </div>
            
        </div>
    )
}
