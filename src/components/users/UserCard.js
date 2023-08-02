import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useOutletContext } from "react-router-dom";

const UserCard = ({ user }) => {
  const authUser = useContext(AuthContext);
  const onFollowUser = useOutletContext();
  const followed = user.followers.includes(authUser.id);
  return (
    <div className="user-card">
      <div className="user-card__profile">
        <img className="img-profile" src={user.profile_pic} alt={user.name} />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">{user.name}</h1>
          <span
            className="user-card__follow"
            onClick={() => onFollowUser(user)}
          >
            {followed ? "Unfollow" : "Follow"}
          </span>
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
