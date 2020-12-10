import React, { useState } from "react";

import ItineraryBoard from "../components/ItineraryBoard";
import ExpenseBoard from "../components/ExpenseBoard";

export default (props) => {
  const [trip, setTrip] = useState(props.trip);

  return (
    <div>
      <div className="d-flex m-4">
        <ItineraryBoard itinerary={trip.itinerary} />
        <ExpenseBoard expenses={trip.expenses} />
      </div>
    </div>
  );
};
