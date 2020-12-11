import React, { useState, useEffect } from "react";
import axios from "axios";
import ItineraryBoard from "../components/ItineraryBoard";
import ExpenseBoard from "../components/ExpenseBoard";
import TodoBoard from "../components/TodoBoard";
import WeatherBoard from "../components/WeatherBoard";

import { Link } from "@reach/router";

import styles from "../css-modules/Dashboard.module.css";

export default (props) => {
  const [trip, setTrip] = useState(props.trip);

  console.log(props);
  return (
    <div>
      <div className={styles.dashboard}>
        <ItineraryBoard itinerary={trip.itinerary} />
        <ExpenseBoard expenses={trip.expenses} />
        <TodoBoard todos={trip.todo} />
        <WeatherBoard location={trip.location} />
      </div>
    </div>
  );
};
