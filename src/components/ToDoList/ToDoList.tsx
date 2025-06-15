import '../ToDoItem/todoitem.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { Todo } from '../../types/todo.interface';

interface Props {
    tasks: Todo[];
    onDeleteTodo: (id: number) => void;
    onSwitchStatus: (id: number) => void;
}

export const ToDoList: React.FC<Props> = (props: Props) => {
    const { tasks, onDeleteTodo, onSwitchStatus } = props;
    return (
        <div className='tasksMain'>
            {tasks.map(task => (
                <ToDoItem key={task.id} task={task} onDeleteItem={onDeleteTodo} onSwitchStatus={onSwitchStatus} />
            ))}
        </div>
    );
}