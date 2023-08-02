import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-text">
          <h1>Signup</h1>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type your name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="Type your email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">About Yourself</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <textarea name="username" id="username" />
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
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm password</label>
            <div className="form-control">
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input
                type="password2"
                name="password2"
                id="password2"
                placeholder="Confirm 2 password"
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="signup" />
          </div>
        </form>
        <div className="or-link">
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
