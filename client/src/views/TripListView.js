import React, { useState, useEffect } from "react";

import axios from "axios";

export default (props) => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${props.id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data[0]);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(user);
  return (
    <div>
      <h1>{user.firstName + " " + user.lastName}</h1>
    </div>
  );
};
