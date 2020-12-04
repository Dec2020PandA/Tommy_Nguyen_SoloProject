import React, { useState } from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <form className="w-50 mt-4">
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group mb-0">
        <label>Password</label>
        <input className="form-control" type="password" />
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
