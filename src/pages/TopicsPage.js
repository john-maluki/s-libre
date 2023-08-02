import React from "react";
import RightMainBar from "../components/RightMainBar";
import Topics from "../components/topics/Topics";

const TopicsPage = () => {
  return (
    <>
      <section class="main__content-pane">
        <div id="topics_modal" class="container-card">
          <div class="container-card__header">
            <h1 class="container-card__page">Topics</h1>
            <div class="container-card__tabs">
              <h4>Topics</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div class="container-card__content">
            {/* <!-- Topics list goes here --> */}
            <Topics />
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default TopicsPage;
