import { useState } from 'react';

function UserTable({ users, columns }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterText, setFilterText] = useState('');

  if (!users || users.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  const getValue = (obj, path) => {
    return path.split('.').reduce((o, key) => o && o[key], obj);
  };

  const sortData = (a, b) => {
    if (!sortColumn) return 0;

    const valueA = getValue(a, sortColumn);
    const valueB = getValue(b, sortColumn);

    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  };

    const filterData = (user) => {
      if (!filterText) return true;

      for (const column of columns) {
          const value = getValue(user, column.key);
          if(value && String(value).toLowerCase().includes(filterText.toLowerCase())){
              return true
          }
      }
        return false
    };

  const handleHeaderClick = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const filteredUsers = users.filter(filterData);
  const sortedUsers = [...filteredUsers].sort(sortData);

  return (
    <div>
       <input
        type="text"
        placeholder="Фильтр..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{marginBottom:"10px"}}
      />
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                textAlign: 'left',
                cursor: 'pointer'
              }}
              onClick={() => handleHeaderClick(column.key)}
            >
              {column.label}
                {sortColumn === column.key && (
                <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            {columns.map((column) => (
              <td key={column.key} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {typeof column.render === 'function' ? column.render(user) :
                      (column.key.includes('.') ?
                      getValue(user, column.key)
                      : user[column.key] )
                    }
                </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default UserTable;