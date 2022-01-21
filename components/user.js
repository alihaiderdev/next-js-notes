import React from 'react';

const User = ({ user }) => {
  return (
    <div style={{ margin: '3rem 0' }}>
      <p style={{ margin: '0' }}>
        <b>email:</b> {user.email}
      </p>
      <p style={{ margin: '0' }}>
        <b>name:</b> {user.name}
      </p>
      <p style={{ margin: '0' }}>
        <b>username:</b> {user.username}
      </p>
      <p style={{ margin: '0' }}>
        <b>website:</b> {user.website}
      </p>
    </div>
  );
};

export default User;
