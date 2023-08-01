import React from "react";

const UserProfileSettings = () => {
  return (
    <div class="main__user-botton-profile">
      <img
        class="img-profile"
        src="./static/images/prof-1.avif"
        alt="profile"
        width="200"
        height="200"
      />
      <div class="main__profile">
        <h4 class="main__profile-name">john maluki</h4>
        <h4 class="main__profile-handle">@johnmaluki</h4>
      </div>
    </div>
  );
};

export default UserProfileSettings;
