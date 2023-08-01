import React from "react";
import Logo from "../components/Logo";
import LeftMainBar from "../components/LeftMainBar";
import Logout from "../components/Logout";
import HomePage from "../pages/HomePage";
import TopicsPage from "../pages/TopicsPage";
import BooksPage from "../pages/BooksPage";
import VideosPage from "../pages/VideosPage";

const Layout = () => {
  return (
    <main className="main">
      <section class="main__left-pane">
        <Logo />
        <LeftMainBar />
        <div class="main__user-botton-profile">
          <img
            class="img-profile"
            src="./static/images/prof-1.avif"
            alt="profile"
            width="200"
            height="200"
          />
          <div class="main__profile">
            <h4 class="main__profile-name">john maluki</h4>
            <Logout />
          </div>
        </div>
      </section>
      {/* <HomePage /> */}
      {/* <TopicsPage /> */}
      {/* <BooksPage /> */}
      <VideosPage />
    </main>
  );
};

export default Layout;
