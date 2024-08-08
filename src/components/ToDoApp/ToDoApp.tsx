import { ToDoItem } from '../ToDoItem/ToDoItem'
import './todoapp.css'

interface Task {
    id: number
    title: string
    text: string
    isCompleted: boolean
    userId: number
}

export const ToDoApp = () => {

    const tasks: Task[] = [
        {id: 1, title: 'First', text: 'first task', isCompleted: true, userId:1},
        {id: 2, title: 'Second',text: 'second task',isCompleted: false, userId:2},
        {id: 3, title: 'Third', text: 'third task', isCompleted: false, userId:3}
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
                    <ToDoItem id={task.id} title={task.title} text={task.text} isCompleted={task.isCompleted} userId={task.userId} />
                ))}
            </div>
        </div>
    )
}