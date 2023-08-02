import React, { useContext } from "react";
import UserCard from "./UserCard";
import { UsersContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";

const FollowedUsers = () => {
  const authUser = useContext(AuthContext);
  const users = useContext(UsersContext);
  const followedUsers = users.filter(
    (user) => user.id !== authUser.id && user.followers.includes(authUser.id)
  );
  const userList = followedUsers.map((user) => (
    <UserCard key={user.id} user={user} />
  ));

  return <>{userList}</>;
};

export default FollowedUsers;
