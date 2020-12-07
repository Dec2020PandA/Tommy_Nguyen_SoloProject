import React, { useState } from "react";
import { Link } from "@reach/router";

export default (props) => {
  const [tripList, setTripList] = useState(props.trips);

  return (
    <div>
      <ul className="list-group list-group-flush">
        {tripList.map((trip, index) => (
          <div key={index} className="list-group-item">
            <Link to={`/trips/${trip._id}`}>{trip.tripName}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
