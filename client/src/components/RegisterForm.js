import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const registerUser = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/register",
        {
          email,
          firstName,
          lastName,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(errors);
        } else {
          setEmail("");
          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirmPassword("");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="w-50 mt-4" onSubmit={registerUser}>
      <h1>Register!</h1>
      <div className="form-group">
        <label>Email</label>{" "}
        {errors.email ? (
          <span className="small text-danger">{errors.email.message}</span>
        ) : null}
        <input
          className="form-control"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>First Name</label>{" "}
        {errors.firstName ? (
          <span className="small text-danger">{errors.firstName.message}</span>
        ) : null}
        <input
          className="form-control"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>{" "}
        {errors.lastName ? (
          <span className="small text-danger">{errors.lastName.message}</span>
        ) : null}
        <input
          className="form-control"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>{" "}
        {errors.password ? (
          <span className="small text-danger">{errors.password.message}</span>
        ) : null}
        <input
          className="form-control"
          type="password"
          value={password}
          autocomplete="false"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group mb-0">
        <label>Confirm Password</label>
        <input
          className="form-control"
          type="password"
          value={confirmPassword}
          autocomplete="false"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Link to="/login">
        <a className="font-weight-light ">Already have an account? Login</a>
      </Link>
      <input
        className="btn btn-md btn-primary d-block  mt-2"
        type="submit"
        value="Register"
      />
    </form>
  );
};
