import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ login }) => {
  const [userCredetials, setUserCredetials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userCredetials);
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setUserCredetials((userCredetials) => ({
      ...userCredetials,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type your username"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-control">
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="btnform-group">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <div className="or-link">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
