import React, { useEffect, useState } from 'react';
import '../ToDoItem/todoitem.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { Todo } from '../../types/todo.interface';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './todolist.css'


interface Props {
    tasks: Todo[];
}

export const ToDoList: React.FC<Props> = ({ tasks }) => {
    const [todos, setTodos] = useState<Todo[]>(tasks)
    
    useEffect(() => {
        setTodos(tasks);
    }, [tasks]);

    console.log(tasks)
    console.log(todos)
    
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
        <TransitionGroup className='tasksMain'>
            {todos.map(task => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                    <ToDoItem  task={task} onDeleteItem={onDeleteTodo } onSwichStatus={onSwichStatus} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}