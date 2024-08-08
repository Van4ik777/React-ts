import { todos } from '../../constants/todos'
import { ToDoList } from '../ToDoList/ToDoList'
import './todoapp.css'



export const ToDoApp = () => {

    return (
        <div className='mainToDo'>
            <h1>To Do List</h1>
            <form>
                <input className='maininput' type="text" placeholder="Add a new task..."/>
                <button className='mainbutton' type="submit" >Add</button>
            </form>
            <div className="tasksMain">
                <ToDoList tasks={todos} />
            </div>
        </div>
    )
}