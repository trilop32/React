import Link from 'next/link';
export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Link href="/task2">
            <button>Таблица пользователей</button>
        </Link>
        </div>
    );
}
         
 