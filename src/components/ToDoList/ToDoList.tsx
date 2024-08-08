import React from 'react';
import '../ToDoItem/todoitem.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';

interface Task {
    id: number;
    title: string;
    text: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    tasks: Task[];
}

export const ToDoList: React.FC<Props> = ({ tasks }) => {
    return (
        <div className='tasksMain'>
            {tasks.map(task => (
                <ToDoItem key={task.id} id={task.id} title={task.title} text={task.text} isCompleted={task.isCompleted} userId={task.userId} />
            ))}
        </div>
    );
}