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

function App() {
  const [authUser, setAuthUser] = useState(null);

  const loginFromLocalStorage = () => {
    const storedAuthUser = getAuthUserFromLocalStorage();
    setAuthUser(storedAuthUser);
  };

  const logout = () => {
    removeAuthUserFromLocalStorage();
    setAuthUser(null);
  };

  useEffect(() => {
    loginFromLocalStorage();
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
      <Layout logout={logout} />
    </AuthContext.Provider>
  ) : (
    <AuthRoutes login={login} />
  );
}

export default App;
