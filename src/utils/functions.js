const AUTH_USER = "authUser";

const removeAuthUserFromUsersList = (users, authUser) => {
  return users.filter((user) => user.id !== authUser.id);
};

const storeAuthUserOnLocalStorage = (authUser) => {
  localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
};

const getAuthUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(AUTH_USER));
};

const removeAuthUserFromLocalStorage = () => {
  return localStorage.removeItem(AUTH_USER);
};

export {
  removeAuthUserFromUsersList,
  storeAuthUserOnLocalStorage,
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
};
