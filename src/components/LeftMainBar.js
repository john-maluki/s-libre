import React from "react";

const LeftMainBar = () => {
  return (
    <div class="main__nav">
      <ul class="main__items">
        <li id="main__item--home" class="main__item">
          <div class="main_link">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </div>
        </li>
        <li id="main__item--topics" class="main__item">
          <div class="main_link">
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
            <span>Topics</span>
          </div>
        </li>
        <li id="main__item--videos" class="main__item">
          <div class="main_link">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
            <span>Videos</span>
          </div>
        </li>
        <li id="main__item--topics" class="main__item">
          <div class="main_link">
            <i class="fa fa-book" aria-hidden="true"></i>
            <span>Books</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftMainBar;
