import Link from 'next/link';
import './style.css';
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
      <Link href="/task3">
        <button>Календарь</button>
      </Link>
      <Link href="/task4">
        <button>Список дел (v2.0)</button>
      </Link>
      <Link href="/task5">
        <button>Таблица пользователей (v2.0)</button>
      </Link>
      <Link href="/task6">
        <button>Таблица пользователей (v3.0)</button>
      </Link>
      <Link href="/Exam">
        <button class="ex">Экзамен</button>
      </Link>
    </div>
  );
}