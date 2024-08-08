import './Todotasks.css';

export const ToDotasks = () => {
    return (
        <div className='task-container'>
            <h2>Заголовок</h2>
            <p>Много Текста Текст Текст Текст Текст</p>
            <div className="task-buttons">
                <button>готово</button>
                <button className="secondary">Удалить</button>
            </div>
        </div>
    )
}
