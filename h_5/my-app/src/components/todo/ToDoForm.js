import React, { useState, useCallback, memo } from 'react';

const ToDoForm = memo(({ onAddTask }) => {
  console.count("ToDoForm Render");
  const [newTask, setNewTask] = useState('');

  const handleInputChange = useCallback((event) => {
    setNewTask(event.target.value);
  }, []);

    const handleAddTaskClick = useCallback(() => {
        if (newTask.trim() !== '') {
            onAddTask(newTask);
            setNewTask('');
        }
    }, [newTask, onAddTask]);

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Введите задачу..."
        style={{ flex: 1, padding: '8px', marginRight: '5px' }}
      />
      <button onClick={handleAddTaskClick} style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Добавить
      </button>
    </div>
  );
});

export default ToDoForm;