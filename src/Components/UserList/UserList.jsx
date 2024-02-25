import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css'

const UserList = ({users}) => {
  return (
    <main>
      {/* Card Lists */}
      {
        !users.length > 0 ? "No Users Available!" :
        users.map((user, i) => (
          <UserCard i = {i} {...user}/>
        ))
      }
    </main>
  );
}

export default UserList;
