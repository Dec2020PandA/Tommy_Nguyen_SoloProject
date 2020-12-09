import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import SideBar from "../components/Sidebar";
import TopNav from "../components/TopNav";

import axios from "axios";

export default (props) => {
  const [user, setUser] = useState({});
  const [trip, setTrip] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios.get(
        `http://localhost:8000/api/users/${props.id}`
      );

      const tripsData = await axios.get(
        `http://localhost:8000/api/trips/${props.tripId}`
      );

      setUser(userData.data[0]);

      setTrip(tripsData.data[0]);
      setLoaded(true);
    };

    fetchData();
  }, []);

  console.log(trip);
  return (
    <div className="d-flex">
      <SideBar />

      <div className="d-flex flex-column w-100">
        {loaded && (
          <TopNav userName={user.firstName} tripName={trip.tripName} />
        )}
        {loaded && <Dashboard trip={trip} />}
      </div>
    </div>
  );
};
