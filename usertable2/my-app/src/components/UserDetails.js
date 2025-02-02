import React from 'react';

function UserDetails({ user, onShowPosts }) {
  if (!user) {
    return <div className="user-details">Выберите пользователя для отображения деталей</div>;
  }

  return (
    <div className="user-details">
      <h2>Детали пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Почта:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Вебсайт:</strong> {user.website}</p>
      <p><strong>Компания:</strong> {user.company?.name}</p>
      <button onClick={() => onShowPosts(user.id)}>Отобразить посты пользователя</button>
    </div>
  );
}

export default UserDetails;