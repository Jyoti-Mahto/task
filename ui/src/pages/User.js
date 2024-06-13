import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const User = () => {
  const [editingUserId, setEditingUserId] = useState(null);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleSave = () => {
    setEditingUserId(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm userId={editingUserId} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default User;
