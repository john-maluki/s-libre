import React from "react";

const UserProfileSettings = () => {
  return (
    <div className="main__user-botton-profile">
      <img
        className="img-profile"
        src="./static/images/prof-1.avif"
        alt="profile"
        width="200"
        height="200"
      />
      <div className="main__profile">
        <h4 className="main__profile-name">john maluki</h4>
        <h4 className="main__profile-handle">@johnmaluki</h4>
      </div>
    </div>
  );
};

export default UserProfileSettings;
