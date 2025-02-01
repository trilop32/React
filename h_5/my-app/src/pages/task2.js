import UserTable from '../components/UserTable';
import { useEffect, useState } from 'react';

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'email', label: 'Email' },
  { key: 'address.city', label: 'Город' },
  { key: 'phone', label: 'Телефон' },
  { key: 'website', label: 'Вебсайт' },
  { key: 'company.name', label: 'Компания' },
];


export default function Task2() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
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
      fetchUsers();
    }, []);
  
    if(loading){
        return <div>Загрузка...</div>
    }
    if(error){
        return <div> Ошибка: {error.message}</div>
    }
  
    return (
      <div>
        <h1>Таблица пользователей</h1>
        <UserTable users={users} columns={columns} />
      </div>
    );
  }