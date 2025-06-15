import React, { useState } from 'react';
import { todos } from '../../constants/todos';
import { ToDoList } from '../ToDoList/ToDoList';
import './todoapp.css';

export const ToDoApp = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState(todos);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (!taskTitle.trim()) return;

        const newTask = {
            id: Date.now(), 
            title: taskTitle,
            text: taskText || '',
            isCompleted: false,
            userId: 1, 
        };

        setTaskList(prev => [...prev, newTask]);
        setTaskTitle('');
        setTaskText('');
    };

    const handleDelete = (id: number) => {
        setTaskList(prev => prev.filter(task => task.id !== id));
    };

    const handleSwitchStatus = (id: number) => {
        setTaskList(prev =>
            prev.map(task =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    return (
        <div className='mainToDo'>
            <h1>To Do List</h1>
            <form onSubmit={handleAddTask}>
                <div className="form-container">
                    <input
                    className="maininput"
                    type="text"
                    placeholder="Task title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <input
                    className="maininput"
                    type="text"
                    placeholder="Task description"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    />
                    <button className="mainbutton" type="submit">Add</button>
                </div>
                </form>
            <div className="tasksMain">
                <ToDoList tasks={taskList} onDeleteTodo={handleDelete} onSwitchStatus={handleSwitchStatus} />
            </div>
        </div>
    );
};
