import { useEffect, useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Layout from "./layouts/Layout";
import AuthRoutes from "./routes/AuthRoutes";
import {
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
  storeAuthUserOnLocalStorage,
} from "./utils/functions";
import { MAIN_DOMAIN } from "./utils/constants";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./contexts/UserContext";

function App() {
  const [users, setUsers] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const loginFromLocalStorage = () => {
    const storedAuthUser = getAuthUserFromLocalStorage();
    setAuthUser(storedAuthUser);
  };

  const logout = () => {
    removeAuthUserFromLocalStorage();
    setAuthUser(null);
    return navigate("/");
  };

  const fetchUsersFromServer = () => {
    fetch(`${MAIN_DOMAIN}/users`)
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  };

  useEffect(() => {
    loginFromLocalStorage();
    fetchUsersFromServer();
  }, []);

  const login = (userCredetials) => {
    fetchUserFromServer(userCredetials.username, userCredetials.password);
  };

  const fetchUserFromServer = (username, password) => {
    fetch(`${MAIN_DOMAIN}/users?username=${username}&password=${password}`)
      .then((resp) => resp.json())
      .then((users) => {
        if (users.length === 1) {
          storeAuthUserOnLocalStorage(users[0]);
          return setAuthUser(users[0]);
        } else {
          storeAuthUserOnLocalStorage(null);
          return setAuthUser(null);
        }
      });
  };

  return authUser ? (
    <AuthContext.Provider value={authUser}>
      <UsersContext.Provider value={users}>
        <Layout logout={logout} setUsers={setUsers} />
      </UsersContext.Provider>
    </AuthContext.Provider>
  ) : (
    <AuthRoutes login={login} />
  );
}

export default App;
