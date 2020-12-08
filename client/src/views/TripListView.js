import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

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
    <div className="container-md mt-4 ">
      <div className="d-flex justify-content-between align-items-center border-bottom">
        <h1>{user.firstName}'s Trips</h1>
        <Link to={`/user/${props.id}/trips/new`}>
          <button className="d-inline-block btn btn-sm btn-primary h-75 ">
            Add Trip
          </button>
        </Link>
      </div>
      {loaded && <TripList userId={props.id} trips={trips} />}
    </div>
  );
};
