import React, { useContext } from "react";
import UserCard from "./UserCard";
import { UsersContext } from "../../contexts/UserContext";
import { removeAuthUserFromUsersList } from "../../utils/functions";
import { AuthContext } from "../../contexts/AuthContext";

const Users = ({ onFollowUser }) => {
  const users = useContext(UsersContext);
  const authUser = useContext(AuthContext);
  const noAuthUserList = removeAuthUserFromUsersList(users, authUser);

  const userList = noAuthUserList.map((user) => (
    <UserCard key={user.id} user={user} />
  ));

  return <>{userList}</>;
};

export default Users;
