import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__profile">
        <img className="img-profile" src={user.profile_pic} alt={user.name} />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">{user.name}</h1>
          <span className="user-card__handle">Follow</span>
        </div>
        <p className="user-card__description">{user.pitch}</p>
        <img
          className="user-card__img"
          src={user.profile_pic}
          alt={user.name}
        />
      </div>
    </div>
  );
};

export default UserCard;
