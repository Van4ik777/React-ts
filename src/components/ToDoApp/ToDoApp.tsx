import { useState } from 'react'
import { todos } from '../../constants/todos'
import { ToDoList } from '../ToDoList/ToDoList'
import './todoapp.css'
import { CreateTodoForm } from '../CreateTodoForm/CreateTodoForm'



export const ToDoApp = () => {
    const [showForm, setShowForm]= useState(false)
    const [todoses, setTodoses] = useState(todos)

    const handleButtonClick=()=>{
        setShowForm(true)
    }

    const handleCloseForm=()=>{
        setShowForm(false)
    }
    const handelSave=(newTodo: { title: string; text: string, date: Date|null })=>{
        const updatedTodos = [...todoses, {id: todoses.length + 1,title: newTodo.title, text:newTodo.text, date:newTodo.date, isCompleted: false, userId:todoses.length + 1}]
        setTodoses(updatedTodos)
        setShowForm(false)

    }
    return (
        <div className='mainToDo'>
            <h1>To Do List</h1>

            <div className="tasksMain">
                <ToDoList tasks={todoses} />
            </div>

            <button className='mainbutton' type="submit" onClick={handleButtonClick} >Add</button>
            <CreateTodoForm show={showForm} handleCloseForm={handleCloseForm} handelSave={handelSave} />
        </div>
    )
}