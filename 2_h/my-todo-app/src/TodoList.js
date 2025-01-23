import React, { useState } from 'react';
import './index.css';

function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTodos([...todos, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleRemoveCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <div className="todo-app">
            <h1>Список Дел</h1>
            <div className="input-area">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Введите задачу..."
                />
                <button onClick={handleAddTask}>Добавить</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(index)}
                        />
                        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                        <button onClick={() => handleRemoveTask(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
             <div className="actions">
            <button onClick={handleRemoveCompleted}>Удалить выполненные</button>
        </div>
        </div>
    );
}

export default TodoList;