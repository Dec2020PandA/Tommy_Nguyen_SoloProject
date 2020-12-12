import React, { useState } from "react";
import { Link, navigate } from "@reach/router";

import styles from "../css-modules/Form.module.css";

import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        navigate(`/user/${res.data.msg}/trips`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="w-50 mt-4 container" onSubmit={login}>
      <h1>Login</h1>
      <div className={styles.formGroup}>
        <input
          className={styles.formInput}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles.formInput}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <Link to="/register">
        <a className={styles.switchBtn}>Don't have an account? Create one!</a>
      </Link>
      <input className={styles.btn} type="submit" value="Login" />
    </form>
  );
};
