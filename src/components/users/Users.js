import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsersFromServer = () => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  };

  useEffect(() => {
    fetchUsersFromServer();
  }, []);

  const userList = users.map((user) => <UserCard key={user.id} user={user} />);

  return <>{userList}</>;
};

export default Users;
