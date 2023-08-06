import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoging, setIsloging] = useState(false);
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

  const toggleIsLogin = () => {
    setIsloging((isLoging) => !isLoging);
  };

  const fetchUsersFromServer = () => {
    setIsLoading(true);
    fetch(`${MAIN_DOMAIN}/users`)
      .then((resp) => resp.json())
      .then((users) => {
        setIsLoading(false);
        return setUsers(users);
      });
  };

  useEffect(() => {
    loginFromLocalStorage();
    fetchUsersFromServer();
  }, []);

  const login = (userCredetials) => {
    fetchUserFromServer(userCredetials.username, userCredetials.password);
  };

  const fetchUserFromServer = (username, password) => {
    toggleIsLogin();
    fetch(`${MAIN_DOMAIN}/users?username=${username}&password=${password}`)
      .then((resp) => resp.json())
      .then((users) => {
        if (users.length === 1) {
          storeAuthUserOnLocalStorage(users[0]);
          setAuthUser(users[0]);
        } else {
          toast.error("Username or Password is incorrect!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          storeAuthUserOnLocalStorage(null);
          setAuthUser(null);
        }
        toggleIsLogin();
      });
  };

  return (
    <>
      {authUser ? (
        <AuthContext.Provider value={authUser}>
          <UsersContext.Provider value={users}>
            <Layout logout={logout} setUsers={setUsers} isLoading={isLoading} />
          </UsersContext.Provider>
        </AuthContext.Provider>
      ) : (
        <AuthRoutes login={login} isLoging={isLoging} />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
