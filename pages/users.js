import React from 'react';

// receiving users as props at build time
const UserList = ({ users }) => {
  console.log('users: ', users);
  return (
    <>
      <h1>List of Users</h1>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id} style={{ margin: '3rem 0' }}>
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
        })}
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { props: { users } };
}
