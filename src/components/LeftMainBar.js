import React from "react";
import { Link } from "react-router-dom";

const LeftMainBar = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="main__nav">
      <ul className="main__items">
        <li id="main__item--home" className="main__item">
          <div className="main_link">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--topics" className="main__item">
          <div className="main_link">
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
            <span>
              <Link to="/topics" style={linkStyle}>
                Topics
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--videos" className="main__item">
          <div className="main_link">
            <i className="fa fa-video-camera" aria-hidden="true"></i>
            <span>
              <Link to="/videos" style={linkStyle}>
                Videos
              </Link>
            </span>
          </div>
        </li>
        <li id="main__item--topics" className="main__item">
          <div className="main_link">
            <i className="fa fa-book" aria-hidden="true"></i>
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
