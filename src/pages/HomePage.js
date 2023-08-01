import React from "react";
import RightMainBar from "../components/RightMainBar";
import Users from "../components/Users";

const HomePage = () => {
  return (
    <>
      <section class="main__content-pane">
        <div id="home_modal" class="container-card">
          <div class="container-card__header">
            <h1 class="container-card__page">Home</h1>
            <div class="container-card__tabs">
              <h4>Students</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div class="container-card__content">
            {/* <!-- Users list goes here --> */}
            <Users />
          </div>
        </div>
        <div id="topics_modal" class="container-card container-card--topics">
          <div class="container-card__header">
            <h1 class="container-card__page">Topics</h1>
            <div class="container-card__tabs">
              <h4>Topics</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div class="container-card__content">
            {/* <!-- Topics list goes here --> */}
          </div>
        </div>
        <div id="videos_modal" class="container-card container-card--videos">
          <div class="container-card__header">
            <h1 class="container-card__page">Videos</h1>
            <div class="container-card__tabs">
              <h4>All</h4>
              <h4>For You</h4>
            </div>
          </div>
          <div id="container-card__content" class="container-card__content">
            {/* <!-- Videos list goes here --> */}
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default HomePage;
