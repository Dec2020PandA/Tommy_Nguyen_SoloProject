import React, { useState } from "react";

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
        <h4>Itinerary</h4>
        {trip.itinerary.map((day, index) => (
          <div key={index}>
            <h3>{day.day}</h3>
            {day.activities.map((activity, index) => (
              <div key={index}>
                <h6>{activity.activityName}</h6>
                <p>Where: {activity.location}</p>
                <p>Time: {activity.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
