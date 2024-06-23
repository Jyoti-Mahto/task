import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onEdit, props }) => {
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Mobile</th>
            <th>Media URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={user.id}>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.mobile}</td>
              <td>{user.mediaUrl}</td>
              <td>
                <button onClick={() => onEdit(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
