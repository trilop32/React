import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';

const columnsConfig = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'address.city', label: 'City' },
    { key: 'phone', label: 'Phone' },
    { key: 'website', label: 'Website' },
    { key: 'company.name', label: 'Company' },
];

export default function HomePage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
        <Head>
            <title>Users List</title>
        </Head>
            <Link href="/todos">
              <button>Go to Todo Page</button>
            </Link>
            <Link href="/users">
                <button>Go to Users Page</button>
            </Link>
            <UserTable users={users} columns={columnsConfig}/>
        </div>
    );
}