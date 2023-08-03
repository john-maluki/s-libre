const removeAuthUserFromUsersList = (users, authUser) => {
  return users.filter((user) => user.id !== authUser.id);
};

export { removeAuthUserFromUsersList };
