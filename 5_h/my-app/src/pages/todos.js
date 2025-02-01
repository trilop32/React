import Head from 'next/head';
import Link from 'next/link';
import ToDoList from '../components/ToDoList';

export default function TodosPage() {
    return (
        <div className="container">
            <Head>
                <title>Todo List</title>
            </Head>
            <Link href="/">
                <button>Go to Home Page</button>
            </Link>
             <ToDoList/>
        </div>
    );
}