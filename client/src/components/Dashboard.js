import React, { useState } from "react";

import ItineraryBoard from "../components/ItineraryBoard";
import ExpenseBoard from "../components/ExpenseBoard";
import TodoBoard from "../components/TodoBoard";

export default (props) => {
  const [trip, setTrip] = useState(props.trip);

  return (
    <div>
      <div className="d-flex h-100 m-4">
        <ItineraryBoard itinerary={trip.itinerary} />
        <ExpenseBoard expenses={trip.expenses} />
        <TodoBoard todos={trip.todo} />
      </div>
    </div>
  );
};
