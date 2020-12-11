import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/ItineraryBoard.module.css";

export default (props) => {
  const [itinerary] = useState(props.itinerary);

  return (
    <div className={styles.itineraryCard}>
      <h6 className={styles.cardLabel}>Itinerary</h6>
      {itinerary.map((day, index) => (
        <div key={index} className={styles.dayCard}>
          <p className={styles.dayCardDay}>{index + 1}</p>
          <p className={styles.dayCardActivity}>{day.mainActivity} </p>
          <p className={styles.dayCardTime}>{day.activities[0].time}</p>
        </div>
      ))}

      <button className={styles.planBtn}>Plan More</button>
    </div>
  );
};
