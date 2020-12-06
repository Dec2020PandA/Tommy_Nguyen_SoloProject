import React, { useState } from "react";
import { Link, navigate } from "@reach/router";

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
        navigate(`/dashboard/${res.data.msg}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="w-50 mt-4" onSubmit={login}>
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-0">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link to="/register">
        <a className="font-weight-light ">Don't have an account? Create one!</a>
      </Link>
      <input
        className="btn btn-md btn-primary d-block  mt-2"
        type="submit"
        value="Login"
      />
    </form>
  );
};
