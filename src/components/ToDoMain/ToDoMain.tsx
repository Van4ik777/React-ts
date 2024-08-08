import { ToDoTasks } from '../ToDotasks/ToDotasks'
import './todomain.css'

interface Task {
    title: string
    text: string
}

export const ToDoMain = () => {

    const tasks: Task[] = [
        {title: 'First Task', text: 'This is the first task' },
        {title: 'Second Task', text: 'This is the second task' },
        {title: 'Third Task', text: 'This is the third task' }
    ]

    return (
        <div className='mainToDo'>
            <h1>To Do List</h1>
            <form>
                <input className='maininput' type="text" placeholder="Add a new task..."/>
                <button className='mainbutton' type="submit" >Add</button>
            </form>
            <div className="tasksMain">
                {tasks.map(task=>(
                    <ToDoTasks title={task.title} text={task.text} />
                ))}
            </div>
        </div>
    )
}