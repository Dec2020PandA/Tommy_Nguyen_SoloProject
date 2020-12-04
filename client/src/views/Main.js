import React from "react";
import { Router } from "@reach/router";

import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

export default () => {
  return (
    <Router>
      <RegisterForm path="/register" />
      <LoginForm path="/login" />
    </Router>
  );
};
