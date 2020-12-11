import React, { useState, useEffect } from "react";

import Dashboard from "../components/Dashboard";
import ItineraryView from "../views/ItineraryView";
import BudgetView from "../views/BudgetView";
import TodoView from "../views/TodoView";

import SideBar from "../components/Sidebar";
import TopNav from "../components/TopNav";

import { Router } from "@reach/router";

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

  console.log(props);
  return (
    <div className="d-flex">
      <SideBar />

      <div className="d-flex flex-column w-100">
        {loaded && (
          <TopNav
            userName={user.firstName}
            tripLocation={trip.location}
            tripName={trip.tripName}
          />
        )}

        {loaded && (
          <Router>
            <Dashboard path="/" trip={trip} />
            <ItineraryView path="itinerary" itinerary={trip.itinerary} />
            <BudgetView path="budget" />
            <TodoView path="todo" todos={trip.todo} />
          </Router>
        )}
      </div>
    </div>
  );
};
