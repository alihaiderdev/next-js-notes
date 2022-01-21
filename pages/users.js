import React from 'react';
import User from '../components/user';

// receiving users as props at build time
const UserList = ({ users }) => {
  console.log('users: ', users);
  return (
    <>
      <h1>List of Users</h1>
      {users &&
        users.map((user) => {
          return <User key={user.id} user={user} />;
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
