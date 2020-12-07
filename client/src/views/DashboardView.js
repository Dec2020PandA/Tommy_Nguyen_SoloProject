import React, { useState, useEffect } from "react";

import axios from "axios";

export default (props) => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {}, []);

  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
