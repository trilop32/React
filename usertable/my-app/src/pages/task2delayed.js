import UserTable from '../components/UserTable';
import { useState, useEffect } from 'react';

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'email', label: 'Email' },
  { key: 'address.city', label: 'Город' },
  { key: 'phone', label: 'Телефон' },
  { key: 'website', label: 'Вебсайт' },
  { key: 'company.name', label: 'Компания' },
];


export default function Task2Delayed() {
    const [showTable, setShowTable] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleShowTable = async () => {
        setShowTable(true);
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    if(loading){
        return <div>Загрузка...</div>
    }
    if(error){
        return <div>Ошибка: {error.message}</div>
    }
  return (
    <div>
      <h1>Таблица по кнопке</h1>
      {!showTable && <button onClick={handleShowTable}>Показать таблицу</button>}
      {showTable && <UserTable users={users} columns={columns} />}
    </div>
  );
}