import React, { useContext } from "react";
import Logo from "../components/Logo";
import LeftMainBar from "../components/LeftMainBar";
import Logout from "../components/Logout";
import AppRoutes from "../routes/AppRoutes";
import { AuthContext } from "../contexts/AuthContext";

const Layout = ({ logout }) => {
  const authUser = useContext(AuthContext);
  return (
    <main className="main">
      <section class="main__left-pane">
        <Logo />
        <LeftMainBar />
        <div class="main__user-botton-profile">
          <img
            class="img-profile"
            src={authUser.profile_pic}
            alt="profile"
            width="200"
            height="200"
          />
          <div class="main__profile">
            <h4 class="main__profile-name">{authUser.name}</h4>
            <Logout logout={logout} />
          </div>
        </div>
      </section>
      <AppRoutes authUser={authUser} />
    </main>
  );
};

export default Layout;
