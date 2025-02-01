import React from 'react';

const UserTable = ({ users, columns }) => {
    if (!users || users.length === 0) {
        return <p>Нет данных для отображения.</p>;
    }

    return (
        <table>
            <thead>
            <tr>
                {columns.map(column => (
                    <th key={column.key}>{column.label}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    {columns.map(column => {
                        let cellValue = null;
                        if(column.key.includes('.')) { // handle nested keys
                            const keys = column.key.split('.');
                            cellValue = keys.reduce((obj, key) => obj && obj[key], user);
                        } else {
                            cellValue = user[column.key];
                        }

                        return (<td key={`${user.id}-${column.key}`}>
                            {cellValue != null ? String(cellValue) : '-'}
                        </td>)
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;