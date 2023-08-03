import React from "react";

const Logout = ({ logout }) => {
  return (
    <button className="main__profile-logout" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
