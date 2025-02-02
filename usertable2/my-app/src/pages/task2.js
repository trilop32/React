import UserTable from '../components/UserTable';
import UserDetails from '../components/UserDetails';
import UserPosts from '../components/UserPosts';
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
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

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

  const handleUserSelect = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const userData = await response.json();
      setSelectedUser(userData);
      setUserPosts(null);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
      setSelectedUser(null)
    }
  };


   const handleShowPosts = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const postsData = await response.json();
      setUserPosts(postsData);
    } catch (error) {
      console.error('Ошибка при получении постов пользователя:', error);
      setUserPosts(null);
    }
  };


  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div> Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <h1>Таблица пользователей</h1>
      <UserTable users={users} columns={columns} onUserSelect={handleUserSelect} />
      <div className="details-and-posts">
        <UserDetails user={selectedUser} onShowPosts={handleShowPosts} />
        <UserPosts posts={userPosts} />
      </div>
    </div>
  );
}