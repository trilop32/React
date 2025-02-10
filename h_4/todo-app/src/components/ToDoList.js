import React, { useState } from 'react';

const ToDoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Список дел</h1>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Введите задачу..."
          style={{ flex: 1, padding: '8px', marginRight: '5px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Добавить
        </button>
      </div>
        {tasks.length === 0 && (
         <p style={{textAlign: "center"}}>Список задач пуст</p>
       )}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '5px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
             <span style={{
               textDecoration: task.completed ? 'line-through' : 'none',
               flex: 1,
               }}
             > {task.text}</span>
             <button onClick={() => handleDeleteTask(task.id)} style={{marginLeft: '10px', padding: '5px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer'}}>
              &#10006;
             </button>
          </li>
        ))}
      </ul>
     {tasks.filter(task => task.completed).length > 0 && (
        <button onClick={handleDeleteCompletedTasks} style={{  padding: '8px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px', display: 'block', marginLeft: 'auto' }}>
        Удалить выполненные
      </button>
       )}
    </div>
  );
};

export default ToDoList;