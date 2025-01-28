'use client'

import React, { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new item..."
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}