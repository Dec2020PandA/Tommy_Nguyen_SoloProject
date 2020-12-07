import React, { useState, useEffect } from "react";
import TripList from "../components/TripList";
import axios from "axios";

export default (props) => {
  const [user, setUser] = useState({});
  const [trips, setTrips] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios.get(
        `http://localhost:8000/api/users/${props.id}`
      );

      const tripsData = await axios.get(
        `http://localhost:8000/api/user/trips/${props.id}`
      );

      setUser(userData.data[0]);

      setTrips(tripsData.data);
      setLoaded(true);
    };

    fetchData();
  }, []);

  console.log(user);
  console.log(trips);
  return (
    <div>
      <h1>Hello {user.firstName}!</h1>
      {loaded && <TripList trips={trips} />}
    </div>
  );
};
