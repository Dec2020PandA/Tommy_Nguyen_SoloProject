import React, { useState } from "react";

import ItineraryBoard from "../components/ItineraryBoard";

export default (props) => {
  const [trip, setTrip] = useState(props.trip);

  return (
    <div>
      <h3>{trip.location}</h3>
      <div>
        <h4>Expenses</h4>
        {trip.expenses.map((expense, index) => (
          <div key={index}>
            <p>
              {expense.expenseName}: {expense.expensePrice}
            </p>
          </div>
        ))}
      </div>

      <div>
        <ItineraryBoard itinerary={trip.itinerary} />
      </div>
    </div>
  );
};
