import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const initialData = {
    name: "",
    username: "",
    pitch: "",
    password: "",
    password2: "",
  };
  const [formErrors, setFormErrors] = useState(initialData);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(formData);
    const errors = formValidation();
    if (Object.keys(errors).every((key) => !errors[key])) {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          pitch: formData.pitch,
          password: formData.password,
          profile_pic:
            "https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_1280.png",
          followers: [],
        }),
      });
    }
    setFormData(initialData);
  };

  const formValidation = () => {
    let errors = { ...formErrors };
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else {
      errors.name = "";
    }

    // regular expression
    const usernameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.username.trim()) {
      errors.username = "Email is required";
    } else if (!formData.username.match(usernameRegex)) {
      errors.username = "Enter a valid email address";
    } else {
      errors.username = "";
    }

    if (!formData.pitch.trim()) {
      errors.pitch = "Enter something about yourself";
    } else {
      errors.pitch = "";
    }

    if (!formData.password.trim()) {
      errors.password = "Enter password";
    } else if (formData.password !== formData.password2) {
      errors.password = "passwords do not match";
    } else {
      errors.password = "";
    }

    setFormErrors(errors);
    return errors;
  };

  return (
    <div className="signup-body">
      <div className="signup-page">
        <div className="signup-card">
          <div className="signup-text">
            <h1>Signup</h1>
          </div>
          <form className="signup-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="form-control">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Type your name"
                />
              </div>
              <div>
                <small>{formErrors.name}</small>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="form-control">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <input
                  type="email"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  id="username"
                  placeholder="Type your email"
                />
              </div>
              <div>
                <small>{formErrors.username}</small>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pitch">About Yourself</label>
              <div className="form-control">
                {/* <i className="fa fa-user-o" aria-hidden="true"></i> */}
                <textarea
                  cols="35"
                  rows="7"
                  name="pitch"
                  id="pitch"
                  onChange={handleChange}
                  value={formData.pitch}
                />
              </div>
              <div>
                <small>{formErrors.pitch}</small>
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
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Type your password"
                />
              </div>
              <div>
                <small>{formErrors.password}</small>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password2">Confirm password</label>
              <div className="form-control">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  onChange={handleChange}
                  value={formData.password2}
                  placeholder="Confirm password"
                />
              </div>
              <div>
                <small>{formErrors.password2}</small>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Signup" />
            </div>
          </form>
          <div className="or-link">
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
