import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <h1>Главная страница</h1>
      <Link href="/task1">
        <button>Список дел</button>
      </Link>
      <Link href="/task2">
        <button>Таблица пользователей</button>
      </Link>
       <Link href="/task2delayed">
        <button>Таблица пользователей по кнопке</button>
      </Link>
    </div>
  );
}