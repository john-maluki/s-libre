import React from "react";

const ShareButton = ({
  name = "Share Topic",
  desc = "Share any topic with others",
  onAction,
}) => {
  return (
    <div className="main__share">
      <div className="main__share-inner-box">
        <h1>{name}</h1>
        <p>{desc}</p>
        <button
          id="topic-share-button"
          className="main__share-button"
          onClick={onAction}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
