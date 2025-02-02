import React, { memo } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = memo(({ tasks, onDeleteTask, onCompleteTask, onDeleteCompletedTasks }) => {
  console.count("ToDoList Render");
  return (
    <>
      {tasks.length === 0 && (
        <p style={{ textAlign: "center" }}>Список задач пуст</p>
      )}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onComplete={onCompleteTask}
          />
        ))}
      </ul>
      {tasks.filter(task => task.completed).length > 0 && (
          <button onClick={onDeleteCompletedTasks} style={{  padding: '8px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px', display: 'block', marginLeft: 'auto' }}>
              Удалить выполненные
          </button>
      )}
    </>
  );
});

export default ToDoList;