import { ToDotasks } from '../ToDotasks/ToDotasks'
import './todomain.css'

export const ToDoMain = () =>{
    return (
        <div className='mainToDo'>
            <h1>To Do List</h1>
            <form>
                <input className='maininput' type="text" placeholder="Add a new task..."/>
                <button className='mainbutton' type="submit" >Add</button>
            </form>
            <div className="tasksMain">
                <ToDotasks />
            </div>
        </div>
    )
}