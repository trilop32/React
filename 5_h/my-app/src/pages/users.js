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
export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setUsers(data);
            setShowTable(true);
        } catch (error) {
            console.error('Failed to fetch users:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <Head>
                <title>Users Table</title>
            </Head>
            <Link href="/todos">
              <button>Go to Todo Page</button>
            </Link>
            <Link href="/">
                <button>Go to Home Page</button>
            </Link>
            {!showTable &&
               <button onClick={fetchUsers} disabled={loading}>
                {loading ? "Loading..." : "Show Users Table"}
               </button>
            }

            {showTable &&
                <>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && <UserTable users={users} columns={columnsConfig} />}
                </>

            }
        </div>
    );
}