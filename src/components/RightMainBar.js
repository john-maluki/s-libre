import React from "react";
import Search from "./Search";

const RightMainBar = () => {
  return (
    <section className="main__right-pane">
      <Search />
      <div className="main__share">
        <div className="main__share-inner-box">
          <h1>Share video</h1>
          <p>Share video tutorial with others</p>
          <button id="video-share-button" className="main__share-button">
            Share video
          </button>
        </div>
      </div>
      <div className="main__share">
        <div className="main__share-inner-box">
          <h1>Share Topics</h1>
          <p>Share any topic with others</p>
          <button id="topic-share-button" className="main__share-button">
            Share topic
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightMainBar;
