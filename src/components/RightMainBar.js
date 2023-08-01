import React from "react";
import Search from "./Search";

const RightMainBar = () => {
  return (
    <section class="main__right-pane">
      <Search />
      <div class="main__share">
        <div class="main__share-inner-box">
          <h1>Share video</h1>
          <p>Share video tutorial with others</p>
          <button id="video-share-button" class="main__share-button">
            Share video
          </button>
        </div>
      </div>
      <div class="main__share">
        <div class="main__share-inner-box">
          <h1>Share Topics</h1>
          <p>Share any topic with others</p>
          <button id="topic-share-button" class="main__share-button">
            Share topic
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightMainBar;
