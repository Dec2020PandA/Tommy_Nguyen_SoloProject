import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import styles from "../css-modules/Form.module.css";

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
          navigate("/login");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="w-50 mt-4 container" onSubmit={registerUser}>
      <h1>Register!</h1>
      <div className={styles.formGroup}>
        {errors.email ? (
          <span className="small text-danger">{errors.email.message}</span>
        ) : null}
        <input
          className={styles.formInput}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="form-group ">
        {errors.firstName ? (
          <span className="small text-danger">{errors.firstName.message}</span>
        ) : null}
        <input
          className={styles.formInput}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </div>
      <div className={styles.formGroup}>
        {errors.lastName ? (
          <span className="small text-danger">{errors.lastName.message}</span>
        ) : null}
        <input
          className={styles.formInput}
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <div className="form-group ">
        {errors.password ? (
          <span className="small text-danger">{errors.password.message}</span>
        ) : null}
        <input
          className={styles.formInput}
          type="password"
          value={password}
          autocomplete="false"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="form-group mb-0 ">
        <input
          className={styles.formInput}
          type="password"
          value={confirmPassword}
          autocomplete="false"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <Link to="/login">
        <a className={styles.switchBtn}>Already have an account? Login</a>
      </Link>
      <input className={styles.btn} type="submit" value="Register" />
    </form>
  );
};
