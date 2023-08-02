import { useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Layout from "./layouts/Layout";
import LoginPage from "./pages/LoginPage";

function App() {
  const [authUser, setAuthUser] = useState(null);

  const login = (userCredetials) => {
    fetchUserFromServer(userCredetials.username, userCredetials.password);
  };

  const fetchUserFromServer = (username, password) => {
    fetch(
      `http://localhost:4000/users?username=${username}&password=${password}`
    )
      .then((resp) => resp.json())
      .then((users) => {
        if (users.length === 1) {
          return setAuthUser(users[0]);
        } else {
          return setAuthUser(null);
        }
      });
  };

  return authUser ? (
    <AuthContext.Provider value={authUser}>
      <Layout />
    </AuthContext.Provider>
  ) : (
    <LoginPage login={login} />
  );
}

export default App;
