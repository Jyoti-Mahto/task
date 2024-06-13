import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userId, onSave }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3000/user/${userId}`)
        .then(response => {
          setName(response.data.name);
          setCity(response.data.city);
          setMobile(response.data.mobile);
          setMediaUrl(response.data.mediaUrl);
        })
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, city, mobile, mediaUrl };

    if (userId) {
      axios.patch(`http://localhost:3000/user/${userId}`, user)
        .then(response => {
          onSave();
        })
        .catch(error => console.error('Error updating user:', error));
    } else {
      axios.post('http://localhost:3000/user', user)
        .then(response => {
          onSave();
        })
        .catch(error => console.error('Error adding user:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} />
      </div>
      <div>
        <label>Media URL:</label>
        <input type="url" value={mediaUrl} onChange={e => setMediaUrl(e.target.value)} />
      </div>
      <button type="submit">{userId ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
