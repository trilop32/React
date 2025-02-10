import React from 'react';

function UserTable({ users, columns }) {
  if (!users || users.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {columns.map((column) => (
              <td key={column.key} style={{ border: '1px solid #ddd', padding: '8px' }}>
                {typeof column.render === 'function' ? column.render(user) :
                  (column.key.includes('.') ?
                   column.key.split('.').reduce((obj, key) => obj && obj[key], user)
                   : user[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;