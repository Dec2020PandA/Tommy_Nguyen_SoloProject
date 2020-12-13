import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/TripList.module.css";

export default (props) => {
  const [tripList, setTripList] = useState(props.trips);

  return (
    <div className="mt-2">
      <ul className={styles.list}>
        {tripList.map((trip, index) => (
          <div key={index} className={styles.listItem}>
            <Link
              className={styles.link}
              to={`/user/${props.userId}/trips/${trip._id}/dashboard`}
            >
              {trip.tripName}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
