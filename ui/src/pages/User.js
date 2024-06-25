import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const User = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    // Fetch all users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleSave = () => {
    setEditingUserId(null);
    fetchUsers(); // Fetch the updated list of users
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm userId={editingUserId} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} />
    </div>
  );
};

export default User;
