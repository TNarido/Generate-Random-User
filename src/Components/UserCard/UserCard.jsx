import React from 'react';
import './UserCard.css'

const UserCard = ({i, picture, name, login, email, location, phone}) => {
  return (
    <div className = 'card'>
      <p className = 'order'>{i + 1}</p>
      <div className = 'image'>
        <img src={picture.medium} alt="" />
      </div>
        <div className = 'info'>
          <p>Name: {name && name.first} {name && name.last}</p>
          <p>Username: {login && login.username}</p>
          <p>Email: {email && email}</p>
          <p>Address: {location.city && location.city}, {location.state && location.state}, {location.country && location.country} {location.postcode && location.postcode}</p>
          <p>Contact: {phone && phone.toLocaleString()}</p>
        </div>
    </div>
  );
}

export default UserCard;
