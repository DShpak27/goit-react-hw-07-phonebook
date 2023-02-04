// Импортируем хук
import { useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { deleteTask } from '../../redux/actions';
export const Task = ({ task }) => {
    // Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();
    // Вызываем генератор экшена и передаём идентификатор задачи
    // Отправляем результат - экшен удаления задачи
    const handleDelete = () => dispatch(deleteTask(task.id));
    return (
        <div>
            <input type="checkbox" />
            <p>{task.text}</p>
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
