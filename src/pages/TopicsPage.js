import React from "react";
import RightMainBar from "../components/RightMainBar";
import Topics from "../components/topics/Topics";

const TopicsPage = () => {
  return (
    <>
      <section className="main__content-pane">
        <div id="topics_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Topics</h1>
            <div className="container-card__tabs">
              <h4>Topics</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div className="container-card__content">
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
