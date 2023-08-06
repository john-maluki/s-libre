import React, { useContext } from "react";
import RightMainBar from "../components/RightMainBar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { MAIN_DOMAIN } from "../utils/constants";
import Search from "../components/Search";
import { UsersContext } from "../contexts/UserContext";
import LoaderComponent from "../components/LoaderComponent";

const HomePage = ({ setUsers, isLoading }) => {
  const authUser = useContext(AuthContext);
  const users = useContext(UsersContext);

  const patchUserOnServer = (user) => {
    fetch(`${MAIN_DOMAIN}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((user) => updateUser(user));
  };

  const updateUser = (user) => {
    const modifiedUsers = users.map((currentUser) =>
      currentUser.id === user.id ? user : currentUser
    );
    setUsers(modifiedUsers);
  };

  const followUser = (user) => {
    let newUser;
    if (user.followers.includes(authUser.id)) {
      newUser = {
        ...user,
        followers: user.followers.filter(
          (followerId) => followerId !== authUser.id
        ),
      };
    } else {
      newUser = {
        ...user,
        followers: [...user.followers, authUser.id],
      };
    }
    patchUserOnServer(newUser);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <section className="main__content-pane">
        <div id="home_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Home</h1>
            <div className="container-card__tabs">
              <h4>
                <Link to="/" style={linkStyle}>
                  All
                </Link>
              </h4>
              <h4>
                <Link to="followed_users" style={linkStyle}>
                  Following
                </Link>
              </h4>
            </div>
          </div>
          <div className="container-card__content">
            {/* <!-- Users list goes here --> */}
            {isLoading ? <LoaderComponent /> : <Outlet context={followUser} />}
          </div>
        </div>
      </section>
      <RightMainBar>
        <Search placeholder="Search Users" />
      </RightMainBar>
    </>
  );
};

export default HomePage;
