import React, { memo, useCallback } from 'react';

const ToDoItem = memo(({ task, onDelete, onComplete }) => {
  console.count(`ToDoItem Render: ${task.text}`);

    const handleDeleteClick = useCallback(() => {
        onDelete(task.id);
    }, [onDelete, task.id]);

    const handleCompleteClick = useCallback(() => {
        onComplete(task.id);
    }, [onComplete, task.id]);

  return (
    <li
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
        onChange={handleCompleteClick}
        style={{ marginRight: '10px', cursor: 'pointer' }}
      />
      <span style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1,
      }}>
       {task.text}
      </span>
      <button onClick={handleDeleteClick} style={{marginLeft: '10px', padding: '5px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer'}}>
        &#10006;
      </button>
    </li>
  );
});

export default ToDoItem;