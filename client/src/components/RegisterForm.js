import React, { useState } from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <form className="w-50 mt-4">
      <h1>Register!</h1>
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="form-control" type="text" autocomplete="false" />
      </div>
      <div className="form-group mb-0">
        <label>Confirm Password</label>
        <input className="form-control" type="text" autocomplete="false" />
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
