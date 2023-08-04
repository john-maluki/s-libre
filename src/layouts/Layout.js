import React, { useContext } from "react";
import Logo from "../components/Logo";
import LeftMainBar from "../components/LeftMainBar";
import Logout from "../components/Logout";
import AppRoutes from "../routes/AppRoutes";
import { AuthContext } from "../contexts/AuthContext";

const Layout = ({ logout, setUsers }) => {
  const authUser = useContext(AuthContext);
  return (
    <main className="main">
      <section className="main__left-pane">
        <Logo />
        <LeftMainBar />
        <div className="main__user-botton-profile">
          <img
            className="img-profile"
            src={authUser.profile_pic}
            alt="profile"
            width="200"
            height="200"
          />
          <div className="main__profile">
            <h4 className="main__profile-name">{authUser.name}</h4>
            <Logout logout={logout} />
          </div>
        </div>
      </section>
      <AppRoutes authUser={authUser} setUsers={setUsers} />
    </main>
  );
};

export default Layout;
