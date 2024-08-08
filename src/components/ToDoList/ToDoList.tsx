import React, { useState } from 'react';
import '../ToDoItem/todoitem.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { Todo } from '../../types/todo.interface';



interface Props {
    tasks: Todo[];
}

export const ToDoList: React.FC<Props> = ({ tasks }) => {
    const [todos, setTodos] = useState<Todo[]>(tasks)

    const onDeleteTodo = (id:number)=>{
        const filteredTodos = todos.filter(todo =>todo.id !== id)
        setTodos(filteredTodos)
    }
    const onSwichStatus = (id:number)=>{
        const filteredTodo = todos.map(todo => {
            if (todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(filteredTodo)

    }
    return (
        <div className='tasksMain'>
            {todos.map(task => (
                <ToDoItem key={task.id} task={task} onDeleteItem={onDeleteTodo } onSwichStatus={onSwichStatus} />
            ))}
        </div>
    );
}