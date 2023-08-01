import React from "react";
import { Link } from "react-router-dom";

const LeftMainBar = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div class="main__nav">
      <ul class="main__items">
        <li id="main__item--home" class="main__item">
          <div class="main_link">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--topics" class="main__item">
          <div class="main_link">
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
            <span>
              <Link to="/topics" style={linkStyle}>
                Topics
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--videos" class="main__item">
          <div class="main_link">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
            <span>
              <Link to="/videos" style={linkStyle}>
                Videos
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--topics" class="main__item">
          <div class="main_link">
            <i class="fa fa-book" aria-hidden="true"></i>
            <span>
              <Link to="/books" style={linkStyle}>
                Books
              </Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftMainBar;
