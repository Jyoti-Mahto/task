import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} class={user.id}>
            {user.name} - {user.city} - {user.mobile} - {user.mediaUrl}
            <button onClick={() => onEdit(user.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
