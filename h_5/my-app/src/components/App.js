import { useState, useCallback } from 'react';
import ToDoForm from './todo/ToDoForm';
import ToDoList from './todo/ToDoList';

const App = () => {
  console.count("App Render");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = useCallback((newTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: newTask, completed: false }]);
  }, []);

  const handleDeleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const handleCompleteTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

    const handleDeleteCompletedTasks = useCallback(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
    }, []);


  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Список дел</h1>
      <ToDoForm onAddTask={handleAddTask} />
      <ToDoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
      />
    </div>
  );
};
export default App;